declare module WebShaarper_Examples {
    module Skin {
        interface Page {
            Title: string;
            Body: __ABBREV.__List.T<any>;
        }
    }
    module ControlClock {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module ControlCalculator {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module ControlCalculation {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module ControlHelloWorld {
        interface EntryPoint {
            get_Body(): __ABBREV.__Client.IControlBody;
        }
    }
    module Client {
        module CanvasAnimation {
            var AnimatedCanvas : {
                <_M1>(draw: {
                    (x: __ABBREV.__JavaScript.CanvasRenderingContext2D): void;
                }, width: number, height: number, caption: _M1): __ABBREV.__Client.Element;
            };
            var Main : {
                (): __ABBREV.__Client.Element;
            };
        }
        module Calculator {
            var Main : {
                (): __ABBREV.__Client.Element;
            };
        }
        module Calculation {
            var Fact1 : {
                (n: number): number;
            };
            var Fact2 : {
                (n: number): number;
            };
            var Main : {
                (): __ABBREV.__Client.Element;
            };
        }
        module HelloWorld {
            var Main : {
                (): __ABBREV.__Client.Element;
            };
        }
    }
    interface Action {
    }
    interface Website {
    }
}
declare module __ABBREV {
    
    export import __List = WebSharper.List;
    export import __Client = WebSharper.Html.Client;
    export import __JavaScript = WebSharper.JavaScript;
}
