# async-until

Wait until a given callback returns true. Works great with async/await.

```js
await until(() => something === someOtherThing);

// Or, more verbose
await until(() => something === someOtherThing, {
  timeout: 500,
  failMsg: 'Nope, it does not.'
});
```
