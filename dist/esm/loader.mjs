import { a as patchEsm, b as bootstrapLazy } from './chunk-04ee945b.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-playground_2",[[1,"my-playground",{"selectedSection":[32],"sections":[32],"addSection":[64]}],[1,"playground-section",{"slot":[1]}]]]], options);
  });
};

export { defineCustomElements };
