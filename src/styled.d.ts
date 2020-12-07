// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    light: string;
    red: string;
    green: string;
    yellow: string;
    dark: string;
  }
}
