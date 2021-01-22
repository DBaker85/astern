import theme, { toggleTheme } from "./themeSlice";

it("should handle toggle theme", () => {
  expect(
    theme(
      { isDark: false },
      {
        type: toggleTheme.type,
      }
    )
  ).toEqual({ dark: true });
});
