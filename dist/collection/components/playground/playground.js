import { h } from '@stencil/core';
import { SEPARATOR } from '../../utils/utils';
export class PlaygroundComponent {
    constructor() {
        this.sections = [];
        this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
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
            return h("li", null,
                h("div", { class: 'node ' + (this.currentSection === section.slot ? 'active' : ''), style: style, onClick: () => {
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
                    } }, section.name),
                this.getTree(section.children, depth + 1));
        }));
    }
    render() {
        return [
            h("aside", null,
                this.getTree(this.sections),
                h("div", { class: 'custom-area' },
                    h("slot", { name: 'playground-custom-area' }))),
            h("main", null,
                h("slot", { name: this.currentSection }))
        ];
    }
    static get is() { return "my-playground"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["playground.css"]
    }; }
    static get styleUrls() { return {
        "$": ["playground.css"]
    }; }
    static get states() { return {
        "selectedSection": {},
        "sections": {}
    }; }
    static get events() { return [{
            "method": "sectionChange",
            "name": "sectionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "addSection": {
            "complexType": {
                "signature": "(slot: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "PlaygroundSection": {
                        "location": "import",
                        "path": "../../utils/utils"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
