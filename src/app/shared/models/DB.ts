import { ApiInfo } from './ApiInfo';
import { DataItem } from './DataItem';

export class DB {
    ApiInfo               : ApiInfo;
    GeneralItems          : DataItem[];
    PeopleItems           : DataItem[];
    GeneralCategories     : string[];
    PeopleCategories      : string[];

    constructor(options:
        {
            ApiInfo?               : ApiInfo;
            GeneralItems?          : DataItem[];
            PeopleItems?           : DataItem[];
            GeneralCategories?     : string[];
            PeopleCategories?      : string[];
        } = {}) {
        this.ApiInfo           = options.ApiInfo;
        this.GeneralItems      = options.GeneralItems;
        this.PeopleItems       = options.PeopleItems;
        this.GeneralCategories = options.GeneralCategories;
        this.PeopleCategories  = options.PeopleCategories;
    }
}