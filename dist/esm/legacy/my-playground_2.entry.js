var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement } from './chunk-e6ffb951.js';
var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(hostRef) {
        registerInstance(this, hostRef);
        this.sections = [];
        this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
    }
    Object.defineProperty(PlaygroundComponent.prototype, "currentSection", {
        get: function () {
            var _this = this;
            return this.sections.find(function (s) { return s.name === _this.selectedSection; }) ?
                this.selectedSection : (this.sections[0] ? this.sections[0].name : this.selectedSection);
        },
        enumerable: true,
        configurable: true
    });
    PlaygroundComponent.prototype.addSection = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sections = this.sections.concat([
                    { name: name }
                ]);
                this.sections.sort(function (a, b) { return a.name.localeCompare(b.name); });
                if (!this.selectedSection) {
                    this.select(name);
                }
                return [2 /*return*/];
            });
        });
    };
    PlaygroundComponent.prototype.select = function (section) {
        this.selectedSection = section;
        localStorage.setItem('core-playground:selectedSection', this.selectedSection);
    };
    PlaygroundComponent.prototype.render = function () {
        var _this = this;
        return [
            h("aside", null, h("ul", null, this.sections.map(function (section) { return h("li", { onClick: function () { return _this.select(section.name); }, class: _this.currentSection === section.name ? 'active' : '' }, section.name); })), h("div", { class: 'custom-area' }, h("slot", { name: 'playground-custom-area' }))),
            h("main", null, h("slot", { name: this.currentSection }))
        ];
    };
    Object.defineProperty(PlaygroundComponent, "style", {
        get: function () { return ":host{-ms-flex-direction:row;flex-direction:row;width:var(--my-playground-width);height:var(--my-playground-height);font-size:var(--my-playground-font-size)}:host,aside{display:-ms-flexbox;display:flex;overflow:hidden}aside{-ms-flex:0 0 auto;flex:0 0 auto;width:var(--my-playground-menu-width);height:100%;background:var(--my-playground-menu-bg-color);color:var(--my-playground-menu-color);-webkit-box-shadow:2px 0 2px 0 rgba(0,0,0,.5);box-shadow:2px 0 2px 0 rgba(0,0,0,.5);-ms-flex-direction:column;flex-direction:column}main{height:100%;padding:10px}main,ul{-ms-flex:1 1;flex:1 1;overflow:auto}ul{list-style:none;margin:0;padding:0}li{height:40px;line-height:40px;padding:0 10px;cursor:pointer;-webkit-transition:color .5s,background .5s;transition:color .5s,background .5s}li.active,li:focus,li:hover{color:var(--my-playground-menu-color-active);background:var(--my-playground-menu-bg-color-active)}.custom-area{-ms-flex:0 0 auto;flex:0 0 auto}"; },
        enumerable: true,
        configurable: true
    });
    return PlaygroundComponent;
}());
var PlaygroundSectionComponent = /** @class */ (function () {
    function PlaygroundSectionComponent(hostRef) {
        registerInstance(this, hostRef);
        this.slot = '';
    }
    PlaygroundSectionComponent.prototype.componentDidLoad = function () {
        this.element.parentElement.addSection(this.slot);
    };
    PlaygroundSectionComponent.prototype.render = function () {
        return [h("h1", null, this.slot), h("slot", null)];
    };
    Object.defineProperty(PlaygroundSectionComponent.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaygroundSectionComponent, "style", {
        get: function () { return "h1{margin-top:0;color:var(--my-playground-section-title-color)}"; },
        enumerable: true,
        configurable: true
    });
    return PlaygroundSectionComponent;
}());
export { PlaygroundComponent as my_playground, PlaygroundSectionComponent as playground_section };
