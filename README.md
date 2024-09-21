# Telegram Web Apps (TWA) SDK

[![npm version](https://img.shields.io/npm/v/@teledeveloperz/twa-sdk.svg)](https://www.npmjs.com/package/@teledeveloperz/twa-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An enhanced TypeScript SDK for Telegram Web Apps (TWA), providing easy access to user data and Telegram Bot API functionality.

## Features

- TypeScript support for better developer experience
- Easy access to TWA user data
- Integration with Telegram Bot API
- Utility functions for common TWA operations

## Installation

```bash
npm install @teledeveloperz/twa-sdk
```

## Usage

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

- `getId()`: Returns the users
