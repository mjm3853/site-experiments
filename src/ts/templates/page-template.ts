import { html } from "lit-html";

export const pageTemplate = (pageData) => html`
<section>
    <h2>${pageData.title}</h2>
    <div>${pageData.body}</div>
</section>
`;
