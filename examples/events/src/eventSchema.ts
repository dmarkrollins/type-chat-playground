// an event type request that candidate event hosts submit to get on the calendar
export type Event = {
    info: (EventItem | UnknownText);
};

export type EventItem = Lab | Presentation;

export const eventItemLengthMinutes = [60, 90, 120];

// Use this type for event items that match nothing else
export interface UnknownText {
    itemType: 'Unknown',
    description: string; // The text that wasn't understood
}

export type Presentation = {
    itemType: 'presentation';
    // the person or persons doing the presentation (examples: Bill and Sarah, John Smith, Jill Sparrow)
    presentors?: string[];
    // the title of the presentation (examples: "How to do MLOps right", "Event Driven Architecture at Scale")
    title?: string;
    // a description of the presentation (examples: "This is a detailed description of the presentation", "This describes what the presentation is all about")
    description?: string;
    // the length in minutes for this presentation - default: 60
    lengthMinutes?: number;
};

export const labStyle = ["Hands On", "Video"];

export type Lab = {
    itemType: 'lab';
    // the person or persons sharing a video, showing a video, or leading the lab (examples: Jim and Steve, Jack Sparrow, Eliot Gould)
    instructors?: string[];
    // the style of the lab (examples: "Hands On", "Video")
    style?: string;
    // the title of the presentation (examples: "How to do MLOps right", "Event Driven Architecture at Scale")
    title?: string;
    // a description of the presentation (examples: "This is a detailed description of the presentation", "This describes what the presentation is all about")
    description?: string;
    // the length in minutes for this lab - default: 60
    lengthMinutes?: number;
};