declare global {
  const vtex: any;
  const vtexjs: any;
  const clientProfileData: any;

  // Definición básica de jQuery para usar $(window).on()
  type JQueryStatic = (selector: string | Element | Document | Window) => JQuery;

  interface JQuery {
    on(events: string, handler: (event: Event, ...args: any[]) => void): this;
  }

  const $: JQueryStatic;
}

// Definición para CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

export {};
