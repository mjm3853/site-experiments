import {html, render} from "lit-html";

// Templates
const helloWorld = html`<p>Hello World</p>`;
const samplePage = html`<p>Sample Page</p>`;

// Initial Page Content
render(helloWorld, document.getElementById("tmp-content"));

// Navigation Handlers
document.getElementById("home-page").addEventListener("click", () => {
    render(helloWorld, document.getElementById("tmp-content"));
    history.pushState(null, "Home Page", "index.html");
});

document.getElementById("sample-page").addEventListener("click", () => {
    render(samplePage, document.getElementById("tmp-content"));
    history.pushState(null, "Sample Page", "sample-page.html");
});

// DELETE ME when creating a site
export default function sum(a, b) {
    return a + b;
}
