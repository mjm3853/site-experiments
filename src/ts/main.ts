import { render } from "lit-html";

import { pageTemplate } from "./models/page.model";

import { homePage } from "./pages/home.page";
import { samplePage } from "./pages/sample.page";

const home = pageTemplate(homePage);
const sample = pageTemplate(samplePage);

const contentMap = [
    {
        contentName: "Home Page",
        content: home,
        path: "",
    },
    {
        contentName: "Sample Page",
        content: sample,
        path: "sample-page",
    },
];

// Navigation Handlers
document.getElementById("home-page").addEventListener("click", () => {
    render(home, document.getElementById("tmp-content"));
    history.pushState({ page: "Home Page" }, "Home Page", "/");
});

document.getElementById("sample-page").addEventListener("click", () => {
    render(sample, document.getElementById("tmp-content"));
    history.pushState({ page: "Sample Page" }, "Sample Page", "/sample-page");
});

// Render content based on initial path
window.onload = () => {
    const currentPage = location.pathname;
    contentRender(currentPage);
};

// Render content based on back/forward button
window.onpopstate = () => {
    const lastPage = location.pathname;
    contentRender(lastPage);
};

function contentRender(pathName): void {
    const path = pathName.replace(/^\/+/g, "");

    for (const entry of contentMap) {
        if (path === entry.path) {
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
