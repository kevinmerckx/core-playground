import { Component, h, State, Method } from '@stencil/core';

@Component({
  tag: 'my-playground',
  styleUrl: 'playground.css',
  shadow: true
})
export class PlaygroundComponent {
  @State() private selectedSection: string;
  @State() private sections: { name: string }[] = [];

  private get currentSection(): string {
    return this.sections.find(s => s.name === this.selectedSection) ?
      this.selectedSection : (this.sections[0] ? this.sections[0].name : this.selectedSection);
  }

  constructor() {
    this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
  }

  @Method()
  async addSection(name: string) {
    this.sections = [
      ...this.sections,
      { name }
    ];
    this.sections.sort((a, b) => a.name.localeCompare(b.name));
    if (!this.selectedSection) {
      this.select(name);
    }
  }

  select(section: string) {
    this.selectedSection = section;
    localStorage.setItem('core-playground:selectedSection', this.selectedSection);
  }

  render() {
    return [
      <aside>
        <ul>
          {this.sections.map(section =>
            <li
              onClick={() => this.select(section.name)}
              class={this.currentSection === section.name ? 'active' : ''}
            >{section.name}</li>)
          }
        </ul>
      </aside>,
      <main>
        <slot name={this.currentSection}></slot>
      </main>
    ];
  }
}
