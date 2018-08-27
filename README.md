# async-until

[![Build Status](https://travis-ci.org/skidding/async-until.svg?branch=master)](https://travis-ci.org/skidding/async-until)

Wait until a given callback returns true. Works great with async/await.

```js
import until from 'async-until';

await until(() => something === someOtherThing);

// Or, more verbose
await until(() => something === someOtherThing, {
  timeout: 500,
  failMsg: 'Nope, it does not.'
});
```
