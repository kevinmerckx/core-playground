import { EventEmitter, ComponentDidLoad } from '../../stencil.core';
import { PlaygroundSection } from '../../utils/utils';
export declare class PlaygroundComponent implements ComponentDidLoad {
    sectionChange: EventEmitter<string>;
    private selectedSection;
    private sections;
    private readonly currentSection;
    constructor();
    componentDidLoad(): void;
    addSection(slot: string): Promise<void>;
    select(section: string): void;
    getTree(sections: PlaygroundSection[], depth?: number): any;
    render(): any[];
}
