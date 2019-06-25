import { h } from '@stencil/core';
export class PlaygroundComponent {
    constructor() {
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
            h("aside", null,
                h("ul", null, this.sections.map(section => h("li", { onClick: () => this.select(section.name), class: this.currentSection === section.name ? 'active' : '' }, section.name)))),
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
    static get methods() { return {
        "addSection": {
            "complexType": {
                "signature": "(name: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
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
