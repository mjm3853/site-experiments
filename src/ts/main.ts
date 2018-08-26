import { html, render } from "lit-html";

// Templates
const helloWorld = html`<p>Hello World</p>`;
const samplePage = html`<p>Sample Page</p>`;

// Initial Page Content
render(helloWorld, document.getElementById("tmp-content"));

// Navigation Handlers
document.getElementById("home-page").addEventListener("click", () => {
    render(helloWorld, document.getElementById("tmp-content"));
    history.replaceState(null, "Home Page", "");
});

document.getElementById("sample-page").addEventListener("click", () => {
    render(samplePage, document.getElementById("tmp-content"));
    history.replaceState(null, "Sample Page", "sample-page");
});

// DELETE ME when creating a site
export default function sum(a, b) {
    return a + b;
}
