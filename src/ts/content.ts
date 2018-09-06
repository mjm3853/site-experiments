import { TemplateResult } from "lit-html";

import { pageTemplate } from "./models/page.model";

import { anotherPage } from "./pages/another-page";
import { homePage } from "./pages/home.page";
import { samplePage } from "./pages/sample.page";

// Export a home page for using as a default
export const home = pageTemplate(homePage);

// Add additional pages
const sample = pageTemplate(samplePage);
const another = pageTemplate(anotherPage);

interface IContentItem {
    content: TemplateResult;
    contentName: string;
    path: string;
    navigationId: string;
}

export const contentMap: IContentItem[] = [
    {
        content: home,
        contentName: "Home Page",
        path: "/",
        navigationId: "home-page",
    },
    {
        content: sample,
        contentName: "Sample Page",
        path: "/sample-page",
        navigationId: "sample-page",
    },
    {
        content: another,
        contentName: "Another Page",
        path: "/another-page",
        navigationId: "another-page",
    },
];
