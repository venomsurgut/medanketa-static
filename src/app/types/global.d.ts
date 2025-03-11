declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.sass' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png' {
    const src: string;
    export default src;
}
declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import { type FC } from 'react';

    const SVG: FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.svg?url' {
    const content: any;
    export default content;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API_NFP_MODULE__: string;
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __WS__: string;

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
declare interface Window {
    api?: {
        connect: (func: (args: boolean) => void) => void;
        start: (account: string) => boolean;
        stop: (account: string) => boolean;
        monitoring: (
            func: (args: {
                command: 'connect' | 'start' | 'stop';
                status: boolean;
                errors?: string;
                data?: {
                    id?: string;
                };
            }) => void,
        ) => boolean;
    };
}
