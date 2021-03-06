const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "./"),
  collectCoverage: true, // 是否收集测试时的覆盖率信息
  // collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}'], // 哪些文件需要收集覆盖率信息
  coverageDirectory: "<rootDir>/test/coverage", // 输出覆盖信息文件的目录
  coveragePathIgnorePatterns: ["<rootDir>/src/index.jsx"], //'/node_modules/', 统计覆盖信息时需要忽略的文件
  moduleNameMapper: {
    // 主要用于与webpack的resolve.alias匹配，注意正则写法
    "^src(.*)$": "<rootDir>/src$1",
    "^util(.*)$": "<rootDir>/src/util$1",
    "^assets(.*)$": "<rootDir>/src/assets$1",
    "^components(.*)$": "<rootDir>/src/components$1"
  },
  setupFiles: ["<rootDir>/test/setup.js"], // 运行测试前可运行的脚本，比如注册enzyme的兼容
  testMatch: [
    // 匹配的测试文件
    "<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}",
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}"
  ],
  testURL:
    "https://test.com?empty=&num=0&str=str&cstr=中文&encode=%e4%b8%ad%e6%96%87", // 运行环境下的url，默认about:blank
  transform: {
    //'^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    "^.+\\.(js|jsx)?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.(css|less)$": "<rootDir>/test/cssTransform.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/fileTransform.js"
  },
  transformIgnorePatterns: [
    // 转换时需要忽略的文件
    "node_modules/?!(react-icons)",
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
    "/node_modules/(?!transpile-me|transpile-me-too).+(js|jsx)$"
  ]
};
