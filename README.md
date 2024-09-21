# Telegram Web Apps (TWA) SDK

[![npm version](https://img.shields.io/npm/v/@teledeveloperz/twa-sdk.svg)](https://www.npmjs.com/package/@teledeveloperz/twa-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/TeleDeveloperz/twa-sdk/main.svg)](https://travis-ci.org/TeleDeveloperz/twa-sdk)
[![Coverage Status](https://img.shields.io/coveralls/github/TeleDeveloperz/twa-sdk/main.svg)](https://coveralls.io/github/TeleDeveloperz/twa-sdk?branch=main)

An enhanced TypeScript SDK for Telegram Web Apps (TWA), providing easy access to user data and Telegram Bot API functionality.

Join our Telegram group: [https://t.me/TeleDeveloperz](https://t.me/TeleDeveloperz)

## Features

- 🚀 TypeScript support for better developer experience
- 👤 Easy access to TWA user data
- 🤖 Integration with Telegram Bot API
- 🛠 Utility functions for common TWA operations
- 📦 Lightweight and easy to integrate

## Installation

```bash
npm install @teledeveloperz/twa-sdk
```

## Quick Start

```typescript
import { TWASDK } from "@teledeveloperz/twa-sdk";

// Initialize the SDK with the TWA init data
const sdk = new TWASDK(window.Telegram.WebApp.initData);

// Access user information
console.log(sdk.user.getFullName());

// Make API calls
sdk.getBotInfo().then(botInfo => {
  console.log("Bot info:", botInfo);
});
```

## API Reference

### TWASDK

The main class for interacting with the TWA SDK.

#### Constructor

```typescript
new TWASDK(initData: string)
```

- `initData`: The initialization data provided by Telegram Web App.

#### Properties

- `user`: An instance of `TelegramUser` containing user information.

#### Methods

- `getBotInfo()`: Fetches information about the bot.
- `getUserProfilePhotos(userId: number)`: Fetches profile photos for a given user ID.

### TelegramUser

A class representing the Telegram user.

#### Methods

- `getId()`: Returns the user's ID.
- `getFullName()`: Returns the user's full name.
- `getUsername()`: Returns the user's username.

## Advanced Usage

For more advanced usage and examples, please refer to our [documentation](https://github.com/TeleDeveloperz/twa-sdk/wiki).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/TeleDeveloperz/twa-sdk/issues) or join our [Telegram group](https://t.me/TeleDeveloperz) for community support.
