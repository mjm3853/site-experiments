import { render } from "lit-html";

import { contentMap, home } from "./content";

// Navigation Handlers
contentMap.forEach((contentItem) => {
    try {
        document.getElementById(contentItem.navigation).addEventListener("click", () => {
            renderContent(contentItem.path);
        });
    } catch (err) {
        // Likely indicates a content item exists with no navigation element
        // Squashin the error for now
    }
});

// Window Handlers
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
