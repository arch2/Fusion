export class ApiInfo {
    ApiKey          : string;
    UserName        : string;
    PassWord        : string;
    AccessToken     : string;
    ClientId        : string;
    BaseUrl         : string;

    constructor(options:
        {
            ApiKey?          : string;
            UserName?        : string;
            PassWord?        : string;
            AccessToken?     : string;
            ClientId?        : string;
            BaseUrl?         : string;
        } = {}) {
        this.ApiKey      = options.ApiKey;
        this.UserName    = options.UserName;
        this.PassWord    = options.PassWord;
        this.AccessToken = options.AccessToken;
        this.ClientId    = options.ClientId;
        this.BaseUrl     = options.BaseUrl;
    }
}