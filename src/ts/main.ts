import { html, render } from "lit-html";

// Templates
const helloWorld = html`<p>Hello World</p>`;
const samplePage = html`<p>Sample Page</p>`;

const contentMap = [
    {
        content: helloWorld,
        path: "",
    },
    {
        content: samplePage,
        path: "sample-page",
    },
];

// Navigation Handlers
document.getElementById("home-page").addEventListener("click", () => {
    render(helloWorld, document.getElementById("tmp-content"));
    history.replaceState({ page: "Home Page" }, "Home Page", "/");
    window.dispatchEvent(new Event("popstate"));
});

document.getElementById("sample-page").addEventListener("click", () => {
    render(samplePage, document.getElementById("tmp-content"));
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
            render(helloWorld, document.getElementById("tmp-content"));
        }
    }
};

// DELETE ME when creating a site
export default function sum(a, b) {
    return a + b;
}
