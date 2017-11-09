module.exports = function until(cb) {
  return new Promise(function(resolve) {
    var loop = function loop() {
      if (cb()) {
        resolve();
      } else {
        setTimeout(loop);
      }
    };
    loop();
  });
};
