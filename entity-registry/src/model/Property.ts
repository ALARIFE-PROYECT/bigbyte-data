
export interface PropertyOptions {
    maxLength?: number;
    minLength?: number;

    min?: number;
    max?: number;

    required?: boolean;
    unique?: boolean;
    default?: any;
    enum?: Array<string>;
    pattern?: string;
}

export class Property {

    name: string;

    type: string | Array<string>;

    options?: PropertyOptions;

    constructor(name: string, type: string, options?: PropertyOptions) {
        this.name = name;
        this.type = type;
        this.options = options;
    }
    
}