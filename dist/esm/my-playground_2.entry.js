import { r as registerInstance, h, g as getElement } from './chunk-e6ffb951.js';

class PlaygroundComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sections = [];
        this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
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
            h("aside", null, h("ul", null, this.sections.map(section => h("li", { onClick: () => this.select(section.name), class: this.selectedSection === section.name ? 'active' : '' }, section.name)))),
            h("main", null, h("slot", { name: this.selectedSection }))
        ];
    }
    static get style() { return ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;width:var(--my-playground-width);height:var(--my-playground-height);font-size:var(--my-playground-font-size)}aside{-ms-flex:0 0 auto;flex:0 0 auto;width:var(--my-playground-menu-width);background:var(--my-playground-menu-bg-color);color:var(--my-playground-menu-color);-webkit-box-shadow:2px 0 2px 0 rgba(0,0,0,.5);box-shadow:2px 0 2px 0 rgba(0,0,0,.5)}aside,main{height:100%;overflow:auto}main{-ms-flex:1 1;flex:1 1;padding:10px}ul{list-style:none;margin:0;padding:0}li{height:40px;line-height:40px;padding:0 10px;cursor:pointer;-webkit-transition:color .5s,background .5s;transition:color .5s,background .5s}li.active,li:focus,li:hover{color:var(--my-playground-menu-color-active);background:var(--my-playground-menu-bg-color-active)}"; }
}

class PlaygroundSectionComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.slot = '';
    }
    componentDidLoad() {
        this.element.parentElement.addSection(this.slot);
    }
    render() {
        return [h("h1", null, this.slot), h("slot", null)];
    }
    get element() { return getElement(this); }
    static get style() { return "h1{margin-top:0;color:var(--my-playground-section-title-color)}"; }
}

export { PlaygroundComponent as my_playground, PlaygroundSectionComponent as playground_section };
