import { request, gql } from "graphql-request";
import { red, green, yellow } from "chalk";
import { createWriteStream } from "fs-extra";
import { resolve, join } from "path";
import { get } from "https";

type ChromaticTest = {
  thumbnailUrl: string;
  spec: {
    component: {
      displayName: string;
      name: string;
    };
  };
};

type ChromaticResponse = {
  app: {
    lastBuild: {
      tests: ChromaticTest[];
    };
  };
};

const docsFolder = resolve(__dirname, "..", "src", "docs");

const screenshot = async () => {
  const query = gql`
    {
      app(id: "5fcf5f3ca2b6ec002176eeef") {
        lastBuild {
          tests {
            thumbnailUrl
            spec {
              component {
                displayName
                name
              }
            }
          }
        }
      }
    }
  `;
  try {
    const chromaticData = await request<ChromaticResponse>(
      "https://www.chromatic.com/graphql",
      query
    );
    chromaticData.app.lastBuild.tests
      .filter(
        (test) =>
          test.spec.component.displayName === "Main" ||
          test.spec.component.displayName === "Full-Logo"
      )
      .map((test) => ({
        name: test.spec.component.displayName.replace("-", ""),
        url: test.thumbnailUrl,
      }))
      .forEach((screenshot) => {
        const fileExtension = screenshot.url.split(".").pop();
        const fileName = `${screenshot.name}.${fileExtension}`;
        const file = createWriteStream(join(docsFolder, fileName));
        get(screenshot.url, function (response) {
          response.pipe(file);
        });
        console.log(`${green("Created screenshot :")} > ${yellow(fileName)}`);
      });
  } catch (err) {
    console.log(red(err));
  }
};

screenshot();
