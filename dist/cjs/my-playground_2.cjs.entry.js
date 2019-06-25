'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-cd1f6529.js');

class PlaygroundComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.sections = [];
        this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
    }
    get currentSection() {
        return this.sections.find(s => s.name === this.selectedSection) ?
            this.selectedSection : (this.sections[0] ? this.sections[0].name : this.selectedSection);
    }
    async addSection(name) {
        this.sections = [
            ...this.sections,
            { name }
        ];
        this.sections.sort((a, b) => a.name.localeCompare(b.name));
        if (!this.selectedSection) {
            this.select(name);
        }
    }
    select(section) {
        this.selectedSection = section;
        localStorage.setItem('core-playground:selectedSection', this.selectedSection);
    }
    render() {
        return [
            __chunk_1.h("aside", null, __chunk_1.h("ul", null, this.sections.map(section => __chunk_1.h("li", { onClick: () => this.select(section.name), class: this.currentSection === section.name ? 'active' : '' }, section.name))), __chunk_1.h("div", { class: 'custom-area' }, __chunk_1.h("slot", { name: 'playground-custom-area' }))),
            __chunk_1.h("main", null, __chunk_1.h("slot", { name: this.currentSection }))
        ];
    }
    static get style() { return ":host{-ms-flex-direction:row;flex-direction:row;width:var(--my-playground-width);height:var(--my-playground-height);font-size:var(--my-playground-font-size)}:host,aside{display:-ms-flexbox;display:flex;overflow:hidden}aside{-ms-flex:0 0 auto;flex:0 0 auto;width:var(--my-playground-menu-width);height:100%;background:var(--my-playground-menu-bg-color);color:var(--my-playground-menu-color);-webkit-box-shadow:2px 0 2px 0 rgba(0,0,0,.5);box-shadow:2px 0 2px 0 rgba(0,0,0,.5);-ms-flex-direction:column;flex-direction:column}main{height:100%;padding:10px}main,ul{-ms-flex:1 1;flex:1 1;overflow:auto}ul{list-style:none;margin:0;padding:0}li{height:40px;line-height:40px;padding:0 10px;cursor:pointer;-webkit-transition:color .5s,background .5s;transition:color .5s,background .5s}li.active,li:focus,li:hover{color:var(--my-playground-menu-color-active);background:var(--my-playground-menu-bg-color-active)}.custom-area{-ms-flex:0 0 auto;flex:0 0 auto}"; }
}

class PlaygroundSectionComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.slot = '';
    }
    componentDidLoad() {
        this.element.parentElement.addSection(this.slot);
    }
    render() {
        return [__chunk_1.h("h1", null, this.slot), __chunk_1.h("slot", null)];
    }
    get element() { return __chunk_1.getElement(this); }
    static get style() { return "h1{margin-top:0;color:var(--my-playground-section-title-color)}"; }
}

exports.my_playground = PlaygroundComponent;
exports.playground_section = PlaygroundSectionComponent;
