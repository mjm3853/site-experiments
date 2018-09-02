import { render } from "lit-html";

import { pageTemplate } from "./models/page.model";

import { homePage } from "./pages/home.page";
import { samplePage } from "./pages/sample.page";

const home = pageTemplate(homePage);
const sample = pageTemplate(samplePage);

const contentMap = [
    {
        content: home,
        contentName: "Home Page",
        path: "/",
    },
    {
        content: sample,
        contentName: "Sample Page",
        path: "/sample-page",
    },
];

// Navigation Handlers
document.getElementById("home-page").addEventListener("click", () => {
    renderContent("/");
});

document.getElementById("sample-page").addEventListener("click", () => {
    renderContent("/sample-page");
});

window.onload = () => {
    renderContent();
};

window.onpopstate = () => {
    renderContent();
};

/**
 * Renders content that is associated with a path.
 * If no path is provided as input, location.pathname will be used.
 * If a path is provided, it must have a leading slash.
 * If there is no content associated with the given path, default content will be used.
 *
 * @param {string} [path]
 * @example renderContent("/sample-page")
 */
function renderContent(path?: string): void {
    const renderPath = path ? path : location.pathname;

    for (const entry of contentMap) {
        if (renderPath === entry.path) {
            render(entry.content, document.getElementById("tmp-content"));
            history.pushState({ page: entry.contentName }, entry.contentName, entry.path);
            break;
        } else {
            render(home, document.getElementById("tmp-content"));
            history.pushState({ page: "Home Page" }, "Home Page", "/");
        }
    }
}

// DELETE ME when creating a site
export default function sum(a, b) {
    return a + b;
}
