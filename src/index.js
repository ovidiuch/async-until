module.exports = function until(cb, opts = {}) {
  const { failMsg, timeout = 300, minLoops = 3 } = opts;
  const t1 = Date.now();

  return new Promise((resolve, reject) => {
    // Why the loop count if we already have a timeout? Well, say something
    // happens and our program freezes for a timeout + 1ms duration. The
    // callback will run in the next loop and instantly expire if the condition
    // isn't met. Sometimes our app releases a chain of async callbacks that
    // need to fulfill before our condition is met, so the min loop count
    // ensures we don't bail too soon in case of a hiccup.
    let loopCount = 0;

    function loop() {
      loopCount += 1;

      if (cb()) {
        resolve(true);
      } else if (Date.now() - t1 < timeout || loopCount < minLoops) {
        setTimeout(loop);
      } else {
        reject(failMsg || getDefaultMessage(cb));
      }
    }

    // Kick it
    loop();
  });
};

function getDefaultMessage(cb) {
  return `Timeout expired. Condition wasn't met: ${cb}`;
}
