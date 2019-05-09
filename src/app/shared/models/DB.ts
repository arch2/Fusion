import { ApiInfo } from './ApiInfo';
import { DataItem } from './DataItem';

export class DB {
    ApiInfo      : ApiInfo;
    DataItem     : DataItem[];

    constructor(options:
        {
            ApiInfo?      : ApiInfo;
            DataItem?     : DataItem[];
        } = {}) {
        this.ApiInfo  = options.ApiInfo;
        this.DataItem = options.DataItem;
    }
}