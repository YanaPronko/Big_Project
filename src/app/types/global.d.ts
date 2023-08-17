declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg?inline' {
  const content: unknown;
  export default content;
}
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
// declare module '*.svg' {
//   import React from 'react';

//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare const __IS_DEV__: boolean;
