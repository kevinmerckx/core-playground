import { r as registerInstance, c as createEvent, h, g as getElement } from './chunk-04ee945b.js';

const SEPARATOR = '/';

class PlaygroundComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sections = [];
        this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
        this.sectionChange = createEvent(this, "sectionChange", 7);
    }
    get currentSection() {
        const aux = (sections) => {
            return sections.reduce((acc, curr) => {
                if (acc) {
                    return acc;
                }
                if (curr.slot === this.selectedSection) {
                    return curr;
                }
                return aux(curr.children);
            }, undefined);
        };
        const section = aux(this.sections);
        return section ? section.slot : '';
    }
    componentDidLoad() {
        this.sectionChange.emit(this.selectedSection);
    }
    async addSection(slot) {
        const addAux = (split, sections) => {
            if (split.length === 0) {
                return sections;
            }
            const name = split[0];
            const section = sections.find(s => s.name === name);
            if (section) {
                section.children = addAux(split.slice(1), section.children);
                return sections;
            }
            else {
                const newSection = {
                    name,
                    children: addAux(split.slice(1), []),
                    slot: split.length === 1 ? slot : undefined
                };
                return sections.concat(newSection);
            }
        };
        const sortAux = (sections) => {
            const tmp = sections.slice(0);
            tmp.sort((a, b) => a.name.localeCompare(b.name));
            tmp.forEach(a => a.children = sortAux(a.children));
            return tmp;
        };
        this.sections = sortAux(addAux(slot.split(SEPARATOR), this.sections));
        if (!this.selectedSection) {
            this.select(slot);
        }
    }
    select(section) {
        this.selectedSection = section;
        localStorage.setItem('core-playground:selectedSection', this.selectedSection);
        this.sectionChange.emit(this.selectedSection);
    }
    getTree(sections, depth = 0) {
        if (sections.length === 0) {
            return '';
        }
        return h("ul", null, sections.map(section => {
            const style = {
                'padding-left': `${10 + 20 * depth}px`
            };
            return h("li", null, h("div", { class: 'node ' + (this.currentSection === section.slot ? 'active' : ''), style: style, onClick: () => {
                    if (section.children.length > 0) {
                        const aux = (tmp) => {
                            if (tmp[0].children.length > 0) {
                                return aux(tmp[0].children);
                            }
                            return tmp[0].slot;
                        };
                        this.select(aux(section.children));
                    }
                    else {
                        this.select(section.slot);
                    }
                } }, section.name), this.getTree(section.children, depth + 1));
        }));
    }
    render() {
        return [
            h("aside", null, this.getTree(this.sections), h("div", { class: 'custom-area' }, h("slot", { name: 'playground-custom-area' }))),
            h("main", null, h("slot", { name: this.currentSection }))
        ];
    }
    static get style() { return ":host{-ms-flex-direction:row;flex-direction:row;width:var(--my-playground-width);height:var(--my-playground-height);font-size:var(--my-playground-font-size)}:host,aside{display:-ms-flexbox;display:flex;overflow:hidden}aside{-ms-flex:0 0 auto;flex:0 0 auto;width:var(--my-playground-menu-width);height:100%;background:var(--my-playground-menu-bg-color);color:var(--my-playground-menu-color);-webkit-box-shadow:2px 0 2px 0 rgba(0,0,0,.5);box-shadow:2px 0 2px 0 rgba(0,0,0,.5);-ms-flex-direction:column;flex-direction:column}main{height:100%;padding:10px}main,ul{-ms-flex:1 1;flex:1 1;overflow:auto}ul{list-style:none;margin:0;padding:0}li .node{height:40px;line-height:40px;padding:0 10px;cursor:pointer;-webkit-transition:color .5s,background .5s;transition:color .5s,background .5s}.node.active,.node:focus,.node:hover{color:var(--my-playground-menu-color-active);background:var(--my-playground-menu-bg-color-active)}.custom-area{-ms-flex:0 0 auto;flex:0 0 auto}"; }
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
        return [h("h1", null, this.title), h("slot", null)];
    }
    get title() {
        return this.slot.split('/').join(' / ');
    }
    get element() { return getElement(this); }
    static get style() { return "h1{margin-top:0;color:var(--my-playground-section-title-color)}"; }
}

export { PlaygroundComponent as my_playground, PlaygroundSectionComponent as playground_section };
