# async-until

[![ci status](https://github.com/skidding/async-until/actions/workflows/test.yml/badge.svg)](https://github.com/skidding/async-until/actions/workflows/test.yml)
[![coverage status](https://codecov.io/gh/skidding/async-until/graph/badge.svg)](https://codecov.io/gh/skidding/async-until)

Wait until a given callback returns true. Works great with async/await.

```js
import until from 'async-until';

await until(() => something === someOtherThing);

// Or, more verbose
await until(() => something === someOtherThing, {
  timeout: 500,
  failMsg: 'Nope, it does not.',
});
```
