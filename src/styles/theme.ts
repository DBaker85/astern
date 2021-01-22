import { DefaultTheme } from "styled-components";

// const dark: DefaultTheme = {
// yellow: "hsla(36, 99%, 47%, 1)",

// green: "hsla(88, 60%, 50%, 1)",

// red: "hsla(352, 55%, 42%, 1)",
// dark: "hsla(210, 10%, 14%, 1)",
// darkBackground: "hsla(212,10%,19%, 1)",
// background: "hsla(213,10%,16%, 1)",
// light: "hsla(212, 9%, 88%, 1)",
// };

export interface Theme {
  background: string;
  light: string;
  red: string;
  green: string;
  yellow: string;
  dark: string;
  text: string;
}

const colors = {
  light: {
    yellow: "hsla(29, 96%, 60%, 1)", //deep saffron
    green: "hsla(71, 57%, 30%, 1)", //avocado
    red: "hsla(360, 72%, 45%, 1)", //lava
    darkest: "hsla(293, 8%, 40%, 1)", //custom
    dark: "hsla(293, 8%, 23%)", // black coffee
    light: "hsla(0, 5%, 83%, 1)", //$light gray
  },
  dark: {
    yellow: "hsla(29, 96%, 56%, 1)", //dark-orange
    green: "hsla(162, 95%, 34%, 1)", //green-munsell
    red: "hsla(332, 97%, 43%, 1)", //dogwood-rose   red: "hsla(4, 66%, 41%, 1)", //firebrick
    darkest: "hsla(300, 33%, 2%, 1)", //rich-black-fogra
    dark: "hsla(250, 12%, 20%, 1)", // cadet
    light: "hsla(60, 24%, 96%, 1)", //$baby-powder
  },
};

const dark: Theme = {
  yellow: colors.dark.yellow,
  green: colors.dark.green,
  red: colors.dark.red,
  dark: colors.dark.darkest,
  background: colors.dark.dark,
  light: colors.dark.light,
  text: colors.dark.light,
};

const light: Theme = {
  yellow: colors.light.yellow,
  green: colors.light.green,
  red: colors.light.red,
  dark: colors.light.darkest,
  background: colors.light.light,
  light: colors.light.light,
  text: colors.light.dark,
};

export { dark, light };
