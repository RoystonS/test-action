(() => {
  var e = {
    147: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"private":true,"name":"test-action","version":"1.0.0","description":"","main":"index.js","scripts":{"build":"ncc build --no-source-map-register --target es2020 --minify index.js","test":"echo \\"Error: no test specified\\" && exit 1"},"author":"","license":"ISC","dependencies":{"@actions/core":"^1.7.0","@actions/github":"^5.0.1"},"devDependencies":{"@vercel/ncc":"^0.33.4"}}'
      );
    },
  };
  var r = {};
  function __nccwpck_require__(i) {
    var n = r[i];
    if (n !== undefined) {
      return n.exports;
    }
    var t = (r[i] = { exports: {} });
    var s = true;
    try {
      e[i](t, t.exports, __nccwpck_require__);
      s = false;
    } finally {
      if (s) delete r[i];
    }
    return t.exports;
  }
  if (typeof __nccwpck_require__ !== "undefined")
    __nccwpck_require__.ab = __dirname + "/";
  var i = {};
  (() => {
    const e = __nccwpck_require__(147);
    console.log(`Running ${e.name}:${e.version}`);
  })();
  module.exports = i;
})();
