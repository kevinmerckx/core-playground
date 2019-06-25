import { p as patchBrowser, b as bootstrapLazy } from './chunk-04ee945b.js';
patchBrowser().then(function (resourcesUrl) {
    return bootstrapLazy([["my-playground_2", [[1, "my-playground", { "selectedSection": [32], "sections": [32], "addSection": [64] }], [1, "playground-section", { "slot": [1] }]]]], { resourcesUrl: resourcesUrl });
});
