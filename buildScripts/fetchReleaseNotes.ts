import { red, green, yellow } from "chalk";
import { createWriteStream } from "fs-extra";
import { resolve, join } from "path";
import fetch, { Response } from "node-fetch";

declare module gitHubRelease {
  export interface Author {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }

  export interface Uploader {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }

  export interface Asset {
    url: string;
    id: number;
    node_id: string;
    name: string;
    label: string;
    uploader: Uploader;
    content_type: string;
    state: string;
    size: number;
    download_count: number;
    created_at: Date;
    updated_at: Date;
    browser_download_url: string;
  }

  export interface RootObject {
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: number;
    author: Author;
    node_id: string;
    tag_name: string;
    target_commitish: string;
    name: string;
    draft: boolean;
    prerelease: boolean;
    created_at: Date;
    published_at: Date;
    assets: Asset[];
    tarball_url: string;
    zipball_url: string;
    body: string;
  }
}

const docsFolder = resolve(__dirname, "..", "src", "docs");

const screenshot = async () => {
  try {
    let fileTemplate = " Release notes";
    const response = await fetch(
      "https://api.github.com/repos/dbaker85/astern/releases"
    );
    const githubData = (await response.json()) as gitHubRelease.RootObject[];

    githubData.forEach((release) => {
      const releaseString = `
        Version ${release.tag_name}
        Release Notes:
          ${release.body}
        `;
      fileTemplate += releaseString;
      console.log(release.body);
    });
    console.log(fileTemplate);
    // console.log(`${green("Created screenshot :")} > ${yellow(fileName)}`);
  } catch (err) {
    console.log(red(JSON.stringify(err)));
  }
};

screenshot();
