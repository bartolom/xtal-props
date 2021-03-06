
declare module Polymer{
    export abstract class Element extends HTMLElement{
        connectedCallback();
        ready();
        disconnectedCallback();
        attributeChangedCallback();
        resolveUrl(path: string);
        $;
        //debounce(name: string, fn: Function, timeInMilliSeconds: number);
        importPath(path: string, fnSuccess: Function, fnError: Function);
        notifyPath(path: string);
        splice(path: string, index: number, removeCount: number);
    }
    export class Debouncer{
        static debounce(debouncer: any, asyncModule: any, callback: any);
    }

    export class Async{
        static microTask;
    }
}

declare namespace polymer{
    // export interface IPolymerPropertyInfo{
    //     type: Function,
    //     value?: any,
    //     notify?: boolean,
    //     reflectToAttribute?: boolean,
    //     readOnly?: boolean,
    //     observer?: string,
    // }
  type PropConstructorType = StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | DateConstructor | ArrayConstructor;

  interface PropObjectType {
    type: PropConstructorType;
    value?: boolean | number | string | Function | Object;
    reflectToAttribute?: boolean;
    readOnly?: boolean;
    notify?: boolean;
    computed?: string;
    observer?: string;
  }
}
