#!/usr/bin/env node
/*
 * The organization profile is the first page a visitor reads. It carried
 * `Currently 0.1.0-alpha` while npm served 1.0.0, because nothing compared the
 * two. This script is that comparison, and it runs on every change and on a
 * schedule.
 *
 * It reads the published version from the registry rather than from any file
 * in this repository, so a release cut anywhere turns this red until the
 * profile follows.
 */

import { readFile } from 'node:fs/promises';

const PACKAGE = '@open-e2ee/signal-protocol-sdk';
const REGISTRY = `https://registry.npmjs.org/${encodeURIComponent(PACKAGE)}`;

const REQUIRED = [
  ['the Relay product entry', /^### \[OpenE2EE Signal Protocol Relay\]\(https:\/\/open-e2ee\.dev\/relay\)$/m],
  ['the SDK product entry', /^### \[Signal Protocol SDK\]\(https:\/\/github\.com\/open-e2ee\/signal-protocol-js\)$/m],
  ['the console link', /https:\/\/console\.open-e2ee\.dev/],
  ['the npm link', /https:\/\/www\.npmjs\.com\/package\/@open-e2ee\/signal-protocol-sdk/],
];

const failures = [];

const profile = await readFile(new URL('../profile/README.md', import.meta.url), 'utf8');

for (const [name, pattern] of REQUIRED) {
  if (!pattern.test(profile)) failures.push(`The profile does not carry ${name}.`);
}

const stated = profile.match(/^Released as `([^`]+)` on /m);
if (!stated) {
  failures.push('The profile states no published version.');
} else {
  const response = await fetch(REGISTRY, { headers: { accept: 'application/json' } });
  if (!response.ok) {
    console.error(`FAIL  the registry answered ${response.status} for ${PACKAGE}`);
    process.exit(2);
  }
  const published = (await response.json())['dist-tags']?.latest;
  if (!published) {
    console.error(`FAIL  the registry names no latest version for ${PACKAGE}`);
    process.exit(2);
  }
  if (stated[1] !== published) {
    failures.push(`The profile states ${stated[1]}; npm serves ${published}.`);
  }
}

/*
 * A stale claim reads exactly like a fresh one, so name every line rather than
 * printing a count.
 */
if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL  ${failure}`);
  process.exit(1);
}

console.log(`PASS  the profile names both products and states ${stated[1]}`);
