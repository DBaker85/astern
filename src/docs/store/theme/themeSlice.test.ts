import theme, { toggleTheme } from "./themeSlice";

it("should handle toggle theme", () => {
  expect(
    theme(
      { dark: false },
      {
        type: toggleTheme.type,
      }
    )
  ).toEqual({ dark: true });
});
