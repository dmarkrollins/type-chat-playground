// an event type request that candidate event hosts submit to get on the calendar
export type Event = {
    items: (EventItem | UnknownText)[];
};

export type EventItem = ["Lab", "Presentation"];

export const eventItemLength = [60, 90, 120];

// Use this type for event items that match nothing else
export interface UnknownText {
    itemType: 'Unknown',
    title: string; // The text that wasn't understood
}

export type Presentation = {
    itemType: 'presentation';
    // the persons performing the presentation (examples: John Smith, Jill Sparrow)
    presentors?: string[];
    // the title of the presentation (examples: "How to do MLOps right", "Event Driven Architecture at Scale")
    title?: string;
    // a description of the presentation (examples: "This is a detailed description of the presentation", "This describes what the presentation is all about")
    description?: string[];
    // default: 60
    length?: number;
};

export const labStyle = ["Hands On", "Video"];

export type Lab = {
    itemType: 'lab';
    // the persons leading the lab (examples: John Smith, Jill Sparrow)
    presentors?: string[];
    // the style of the lab (examples: "Hands On", "Video")
    style?: string;
    // the title of the presentation (examples: "How to do MLOps right", "Event Driven Architecture at Scale")
    title?: string;
    // a description of the presentation (examples: "This is a detailed description of the presentation", "This describes what the presentation is all about")
    description?: string[];
    // default: 60
    length?: number;
};