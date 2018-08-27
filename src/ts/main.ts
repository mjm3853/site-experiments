import { render } from "lit-html";

import { pageTemplate } from "./models/page.model";

import { homePage } from "./pages/home.page";
import { samplePage } from "./pages/sample.page";

const home = pageTemplate(homePage);
const sample = pageTemplate(samplePage);

const contentMap = [
    {
        content: home,
        path: "",
    },
    {
        content: sample,
        path: "sample-page",
    },
];

// Navigation Handlers
document.getElementById("home-page").addEventListener("click", () => {
    render(home, document.getElementById("tmp-content"));
    history.replaceState({ page: "Home Page" }, "Home Page", "/");
    window.dispatchEvent(new Event("popstate"));
});

document.getElementById("sample-page").addEventListener("click", () => {
    render(sample, document.getElementById("tmp-content"));
    history.replaceState({ page: "Sample Page" }, "Sample Page", "/sample-page");
    window.dispatchEvent(new Event("popstate"));
});

window.onload = () => {
    // Strip leading slash from pathname
    const currentPage = location.pathname.replace(/^\/+/g, "");

    for (const entry of contentMap) {
        if (currentPage === entry.path) {
            render(entry.content, document.getElementById("tmp-content"));
            break;
        } else {
            render(home, document.getElementById("tmp-content"));
        }
    }
};

// DELETE ME when creating a site
export default function sum(a, b) {
    return a + b;
}
