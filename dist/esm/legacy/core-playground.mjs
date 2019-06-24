import { p as patchBrowser, b as bootstrapLazy } from './chunk-e6ffb951.js';
patchBrowser().then(function (resourcesUrl) {
    return bootstrapLazy([["my-playground_2", [[1, "my-playground", { "selectedSection": [32], "sections": [32], "addSection": [64] }], [1, "playground-section", { "slot": [1] }]]]], { resourcesUrl: resourcesUrl });
});
