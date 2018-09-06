import { pageTemplate } from "./models/page.model";

import { homePage } from "./pages/home.page";
import { samplePage } from "./pages/sample.page";

// Export a home page for using as a default
export const home = pageTemplate(homePage);

// Add additional pages
const sample = pageTemplate(samplePage);

export const contentMap = [
    {
        content: home,
        contentName: "Home Page",
        path: "/",
        navigation: "home-page",
    },
    {
        content: sample,
        contentName: "Sample Page",
        path: "/sample-page",
        navigation: "sample-page",
    },
    {
        content: sample,
        contentName: "Another Page",
        path: "/another-page",
        navigation: "another-page",
    },
];
