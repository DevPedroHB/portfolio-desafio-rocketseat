import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      hue: number;
      bodyBgColor: string;
      textColor: string;
      textColorAlt: string;
      bgCards: string;
      bgTechs: string;
      bgTechsAlt: string;
      scrollBarColor: string;
      scrollThumbColor: string;
    };
  }
}
