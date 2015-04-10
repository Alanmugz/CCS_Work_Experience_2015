declare module WebSharper_Client_Server_Web_App {
    module Skin {
        interface Page {
            Title: string;
            Body: __ABBREV.__List.T<any>;
        }
    }
    module ControlUpdateRate {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module ControlInsertRate {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module ControlGetRate {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module Client {
        var GetRate : {
            (currencyCode: string, k: {
                (x: string): void;
            }): void;
        };
        var InsertRate : {
            (currencyId: string, currencyCode: string, currencyValue: string, k: {
                (x: string): void;
            }): void;
        };
        var UpdateRate : {
            (currencyCode: string, currencyValue: string, k: {
                (x: string): void;
            }): void;
        };
        var Get : {
            (): __ABBREV.__Client.Element;
        };
        var Insert : {
            (): __ABBREV.__Client.Element;
        };
        var Update : {
            (): __ABBREV.__Client.Element;
        };
    }
    interface Action {
    }
    interface Website {
    }
}
declare module __ABBREV {
    
    export import __List = WebSharper.List;
    export import __Client = WebSharper.Html.Client;
}
