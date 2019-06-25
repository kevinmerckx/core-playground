'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-c9423157.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["my-playground_2.cjs",[[1,"my-playground",{"selectedSection":[32],"sections":[32],"addSection":[64]}],[1,"playground-section",{"slot":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
