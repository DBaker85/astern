import ReactGA, { EventArgs } from "react-ga";

export const initialize = () => {
  if (process.env.NODE_ENV === "production") {
    const config = [
      {
        trackingId: "UA-141677330-2",
        debug: process.env.DEBUG ? true : false,
      },
    ];

    requestIdleCallback(() => ReactGA.initialize(config));
  }
};

export const analyticsEvent = (options: EventArgs) => {
  const event = () => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.event({ ...options });
    } else {
      console.log(`Analytics Event => ${JSON.stringify({ ...options })}`);
    }
  };
  requestIdleCallback(() => event());
};

export const pageView = (page: string) => {
  const event = () => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(page);
    } else {
      console.log(`Analytics Page => ${page}`);
    }
  };
  requestIdleCallback(() => event());
};

export const eventActions = {
  clicked: (text: string) => `Clicked ${text}`,
  downloaded: (text: string) => `Downloaded ${text}`,
  toggled: (text: string) => `Toggled ${text}`,
};
export const eventCategories = {
  user: "User",
};
