import { Component, h, State, Method, Event, EventEmitter, ComponentDidLoad } from '@stencil/core';
import { PlaygroundSection, SEPARATOR } from '../../utils/utils';

@Component({
  tag: 'my-playground',
  styleUrl: 'playground.css',
  shadow: true
})
export class PlaygroundComponent implements ComponentDidLoad {
  @Event() sectionChange: EventEmitter<string>;

  @State() private selectedSection: string;
  @State() private sections: PlaygroundSection[] = [];

  private get currentSection(): string {
    const aux = (sections: PlaygroundSection[]) => {
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

  constructor() {
    this.selectedSection = localStorage.getItem('core-playground:selectedSection') || '';
  }

  componentDidLoad() {
    this.sectionChange.emit(this.selectedSection);
  }

  @Method()
  async addSection(slot: string) {
    const addAux = (split: string[], sections: PlaygroundSection[]) => {
      if (split.length === 0) {
        return sections;
      }
      const name = split[0];
      const section = sections.find(s => s.name === name);
      if (section) {
        section.children = addAux(split.slice(1), section.children);
        return sections;
      } else {
        const newSection: PlaygroundSection = {
          name,
          children: addAux(split.slice(1), []),
          slot: split.length === 1 ? slot : undefined
        };
        return sections.concat(newSection);
      }
    };
    const sortAux = (sections: PlaygroundSection[]) => {
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

  select(section: string) {
    this.selectedSection = section;
    localStorage.setItem('core-playground:selectedSection', this.selectedSection);
    this.sectionChange.emit(this.selectedSection);
  }

  getTree(sections: PlaygroundSection[], depth = 0) {
    if (sections.length === 0) {
      return '';
    }
    return <ul>
      {sections.map(section => {
        const style = {
          'padding-left': `${10 + 20 * depth}px`
        };
        return <li>
          <div 
            class={'node ' + (this.currentSection === section.slot ? 'active' : '')}
            style={style} onClick={() => {
            if (section.children.length > 0) {
              const aux = (tmp: PlaygroundSection[]): string => {
                if (tmp[0].children.length > 0) {
                  return aux(tmp[0].children);
                }
                return tmp[0].slot;
              };
              this.select(aux(section.children));
            } else {
              this.select(section.slot);
            }
          }}>{section.name}</div>
          {this.getTree(section.children, depth + 1)}
        </li>
      })}
    </ul>;
  }

  render() {
    return [
      <aside>
        {this.getTree(this.sections)}
        <div class='custom-area'>
          <slot name='playground-custom-area' />
        </div>
      </aside>,
      <main>
        <slot name={this.currentSection}></slot>
      </main>
    ];
  }
}
