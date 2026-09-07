# OpenE2EE

**End-to-end encryption for TypeScript developers.**

OpenE2EE builds open-source, protocol-level E2EE packages in pure TypeScript. They run where JavaScript applications run: Expo and React Native, modern browsers, and Node. There are no native modules and no prebuild step. OpenE2EE Relay operates the delivery infrastructure beside them.

## Products

### [OpenE2EE Relay](https://open-e2ee.dev/relay)

Managed encrypted delivery for applications built on the SDK. Relay operates device mailboxes, delivery and pull, and group fan-out. It also operates private encrypted attachment storage, push wakes, and exact lifecycle controls.

Start in the [Console](https://console.open-e2ee.dev). Every project carries a Development environment at no cost and without a card.

### [Signal Protocol SDK](https://github.com/open-e2ee/signal-protocol-js)

`@open-e2ee/signal-protocol-sdk` is an independent TypeScript implementation of a versioned messaging profile. The profile follows the public [Signal Protocol specifications](https://signal.org/docs/). It carries post-quantum PQXDH, the Double Ratchet, multi-device, groups, sealed sender, encrypted attachments, and safety numbers. The storage, relay, and object-store adapters are pluggable.

Released as `1.0.0` on [npm](https://www.npmjs.com/package/@open-e2ee/signal-protocol-sdk).

## The relay boundary

- OpenE2EE Relay stores ciphertext and the account, device, route, timing, size, quota, and abuse metadata that delivery requires.
- OpenE2EE Relay never needs message plaintext or device private keys.
- The OpenE2EE Signal Protocol SDK works with OpenE2EE Relay or another adapter. OpenE2EE Relay is the shortest hosted path, not a requirement of the SDK.
- A self-hosted adapter keeps relay metadata in infrastructure the developer operates. A managed project places the required relay metadata with OpenE2EE.

## Links

- Website: [open-e2ee.dev](https://open-e2ee.dev)
- Console: [console.open-e2ee.dev](https://console.open-e2ee.dev)
- Documentation: [docs.open-e2ee.dev](https://docs.open-e2ee.dev)
- Pricing: [open-e2ee.dev/pricing](https://open-e2ee.dev/pricing)
- npm: [@open-e2ee/signal-protocol-sdk](https://www.npmjs.com/package/@open-e2ee/signal-protocol-sdk)
- Design system: [open-e2ee/design](https://github.com/open-e2ee/design)

## Licensing

Everything is source-available. The SDK is dual-licensed: **AGPL-3.0** for compatible open-source use, with a **commercial license** available for proprietary products (licensing@open-e2ee.dev). OpenE2EE Relay is a subscription service, and its plans are on [open-e2ee.dev/pricing](https://open-e2ee.dev/pricing).

---

*OpenE2EE is an independent project. It is not affiliated with, endorsed by, or sponsored by Signal Messenger LLC or the Signal Technology Foundation.*
