export class DataItem {
    id           : number;
    name         : string;
    category     : string;
    Site         : string;

    constructor(options:
        {
            Id?           : number;
            Name?         : string;
            Category?     : string;
            Site?         : string;
        } = {}) {
        this.id       = options.Id;
        this.name     = options.Name;
        this.category = options.Category;
        this.Site     = options.Site;
    }
}