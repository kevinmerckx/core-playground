import { Component, ComponentDidLoad, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'playground-section',
  styleUrl: 'playground-section.css',
  shadow: true
})
export class PlaygroundSectionComponent implements ComponentDidLoad {
  @Prop() slot = '';
  @Element() element: HTMLElement;

  componentDidLoad() {
    (this.element.parentElement as HTMLMyPlaygroundElement).addSection(this.slot);
  }

  render() {
    return [<h1>{this.title}</h1>,<slot></slot>];
  }

  private get title() {
    return this.slot.split('/').join(' / ');
  }
}
