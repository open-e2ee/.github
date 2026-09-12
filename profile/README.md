<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/open-e2ee/design/v0.21.2/brand/generated/hosted/open-e2ee-logo-dark.svg">
  <img src="https://raw.githubusercontent.com/open-e2ee/design/v0.21.2/brand/generated/hosted/open-e2ee-logo-light.svg" alt="OpenE2EE" width="340">
</picture>

**End-to-end encryption for TypeScript developers.**

OpenE2EE builds open-source encryption software in pure TypeScript. The Signal Protocol SDK supports Expo, React Native, browsers, and Node. OpenE2EE Relay operates encrypted message delivery.

## Products

### [OpenE2EE Relay](https://open-e2ee.dev/relay)

OpenE2EE Relay delivers encrypted messages for applications that use the SDK. It operates device mailboxes, message delivery, and group fan-out. It also operates encrypted attachment storage, push wakes, and lifecycle controls.

Start in the [Console](https://console.open-e2ee.dev). Each project includes a free Development environment without a card.

### [Signal Protocol SDK](https://github.com/open-e2ee/signal-protocol-js)

The OpenE2EE Signal Protocol SDK implements the public [Signal Protocol specifications](https://signal.org/docs/) independently.

It provides post-quantum PQXDH, the Double Ratchet, multi-device messaging, groups, sealed sender, encrypted attachments, and safety numbers. Applications choose their storage, relay, and remote object store adapters.

Install [`@open-e2ee/signal-protocol-sdk` from npm](https://www.npmjs.com/package/@open-e2ee/signal-protocol-sdk). The [README](https://github.com/open-e2ee/signal-protocol-js#readme) includes a demo, a complete example, and runtime setup links.

Released as `2.0.1` on [npm](https://www.npmjs.com/package/@open-e2ee/signal-protocol-sdk).

The Expo SQLCipher store requires a development build. It does not run in Expo Go.

## The relay boundary

- OpenE2EE Relay stores ciphertext and the account, device, route, timing, size, quota, and abuse metadata that delivery requires.
- The relay never needs message plaintext or device private keys.
- The SDK works with OpenE2EE Relay or another relay adapter. The managed service is optional.
- A self-hosted adapter keeps relay metadata in infrastructure the developer operates. A managed project places the required relay metadata with OpenE2EE.

## Links

- Website: [open-e2ee.dev](https://open-e2ee.dev)
- Console: [console.open-e2ee.dev](https://console.open-e2ee.dev)
- Documentation: [docs.open-e2ee.dev](https://docs.open-e2ee.dev)
- Pricing: [open-e2ee.dev/pricing](https://open-e2ee.dev/pricing)
- npm: [@open-e2ee/signal-protocol-sdk](https://www.npmjs.com/package/@open-e2ee/signal-protocol-sdk)
- Design system: [open-e2ee/design](https://github.com/open-e2ee/design)

## Licensing

The SDK is open source under **AGPL-3.0-or-later**. A [commercial license](https://github.com/open-e2ee/signal-protocol-js/blob/main/COMMERCIAL.md) is available for proprietary products.

OpenE2EE Relay is a subscription service. [View plans](https://open-e2ee.dev/pricing).

---

OpenE2EE is an independent project. It is not affiliated with, endorsed by, or sponsored by Signal Messenger LLC or the Signal Technology Foundation.

The SDK is not wire-compatible with Signal Messenger or libsignal.
