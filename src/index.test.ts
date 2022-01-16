import until from '.';

it('fails if condition returns false', async () => {
  expect.assertions(1);
  try {
    await until(() => false);
  } catch (err) {
    expect(err).toEqual(
      new Error(`Timeout expired. Condition wasn't met: () => false`)
    );
  }
});

it('fails if condition takes too long', async () => {
  expect.assertions(1);
  try {
    let response = false;
    setTimeout(() => {
      response = true;
    }, 500);
    await until(() => response, { timeout: 250 });
  } catch (err) {
    expect(err).toEqual(
      new Error(`Timeout expired. Condition wasn't met: () => response`)
    );
  }
});

it('succeeds if condition becomes true', async () => {
  let response = false;
  setTimeout(() => {
    response = true;
  }, 250);
  await expect(until(() => response, { timeout: 500 })).resolves.toBe(true);
});

it('fails if condition throws', async () => {
  expect.assertions(1);
  try {
    await until(() => {
      throw new Error('boo');
    });
  } catch (err) {
    expect(err).toEqual(new Error('boo'));
  }
});
