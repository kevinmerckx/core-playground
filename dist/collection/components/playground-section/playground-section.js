import { h } from '@stencil/core';
export class PlaygroundSectionComponent {
    constructor() {
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
    static get is() { return "playground-section"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["playground-section.css"]
    }; }
    static get styleUrls() { return {
        "$": ["playground-section.css"]
    }; }
    static get properties() { return {
        "slot": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "slot",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get elementRef() { return "element"; }
}
