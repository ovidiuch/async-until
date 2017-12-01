import until from './';

it('fails if condition returns false', async () => {
  expect.assertions(1);
  const cb = jest.fn();
  try {
    await until(() => false);
  } catch (err) {
    expect(err).toEqual(
      `Timeout expired. Condition wasn't met: function () {return false;}`
    );
  }
});

it('fails if condition takes too long', async () => {
  expect.assertions(1);
  const cb = jest.fn();
  try {
    let response = false;
    setTimeout(() => {
      response = true;
    }, 500);
    await until(() => response, { timeout: 250 });
  } catch (err) {
    expect(err).toEqual(
      `Timeout expired. Condition wasn't met: function () {return response;}`
    );
  }
});

it('succeeds if condition becomes true', async () => {
  const cb = jest.fn();
  let response = false;
  setTimeout(() => {
    response = true;
  }, 250);
  await expect(until(() => response, { timeout: 500 })).resolves.toBe(true);
});
