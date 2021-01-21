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

const colors = {
  light: {
    yellow: "hsla(29, 96%, 56%, 1)", //dark-orange
    green: "hsla(162, 95%, 34%, 1)", //green-munsell
    red: "hsla(332, 97%, 43%, 1)", //dogwood-rose   red: "hsla(4, 66%, 41%, 1)", //firebrick
    darkest: "hsla(300, 33%, 2%, 1)", //rich-black-fogra
    dark: "hsla(250, 12%, 20%, 1)", // cadet
    light: "hsla(60, 24%, 96%, 1)", //$baby-powder
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

const dark: DefaultTheme = {
  yellow: colors.dark.yellow,
  green: colors.dark.green,
  red: colors.dark.red,
  dark: colors.dark.darkest,
  background: colors.dark.dark,
  light: colors.dark.light,
  text: colors.dark.light,
};

const light: DefaultTheme = {
  yellow: colors.light.yellow,
  green: colors.light.green,
  red: colors.light.red,
  dark: colors.light.darkest,
  background: colors.light.dark,
  light: colors.light.light,
  text: colors.light.light,
};

export { dark, light };
