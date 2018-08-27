import { html, TemplateResult } from "lit-html";

export interface IArticleData {
    author: string;
    date: Date;
    title: string;
    body: string | TemplateResult;
}

export const articleTemplate = (articleData: IArticleData) => html`
<article>
    <h3>${articleData.title}</h3>
    <p>
        <span>By: ${articleData.author}</span>
        &nbsp;|&nbsp;
        <span>${articleData.date.toDateString()}</span>
    </p>
    <div>${articleData.body}</div>
</article>
`;
