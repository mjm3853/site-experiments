import { html, TemplateResult } from "lit-html";

export interface IPageData {
    title: string;
    body: string | TemplateResult;
}

export const pageTemplate = (pageData: IPageData) => html`
<section>
    <h2>${pageData.title}</h2>
    <div>${pageData.body}</div>
</section>
`;
