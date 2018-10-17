# bottender-connector-simple-messenger

---

This is a simplified version of `bottender`'s `MessengerConnector`. Skipping `getUserProfile` to increase response speed.

## Install

```sh
$ npm install --save bottender-connector-simple-messenger
```

or

```sh
$ yarn add bottender-connector-simple-messenger
```

## Usage

```js
import SimpleMessengerConnector from 'bottender-connector-simple-messenger';

const bot = new Bot({
  connector: new SimpleMessengerConnector({
    accessToken: '__FILL_YOUR_TOKEN_HERE__',
    appSecret: '__FILL_YOUR_SECRET_HERE__',
  }}),
});
```
