export declare type PlaygroundSection = {
    name: string;
    children: PlaygroundSection[];
    slot: string;
};
export declare class PlaygroundComponent {
    private selectedSection;
    private sections;
    private readonly currentSection;
    constructor();
    addSection(slot: string): Promise<void>;
    select(section: string): void;
    getTree(sections: PlaygroundSection[], depth?: number): any;
    render(): any[];
}
