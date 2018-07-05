const babelJest = require("babel-jest");
const tsc = require('typescript'); 

module.exports = {
  process(src, path) {
    if (path.endsWith(".ts") || path.endsWith(".tsx")) {
      return tsc.transpile(
        src,
        {
          module: tsc.ModuleKind.CommonJS,
          jsx: tsc.JsxEmit.React
        },
        path,
        []
      );
    }
    if (path.endsWith(".js") || path.endsWith(".jsx")) {
      return babelJest.process(src, path);
    }
    return src;
  }
};
