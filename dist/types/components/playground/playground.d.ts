export declare class PlaygroundComponent {
    private selectedSection;
    private sections;
    private readonly currentSection;
    constructor();
    addSection(name: string): Promise<void>;
    select(section: string): void;
    render(): any[];
}
