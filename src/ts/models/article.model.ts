import { html, TemplateResult } from "lit-html";

export interface IArticleData {
    author: string;
    date: Date;
    title: string;
    body: string | TemplateResult;
}

export const articleTemplate = (articleData: IArticleData) => html`
<style>
    .tmp-article-header {
        margin-top: 0;
    }
</style>
<article>
    <h3 class="tmp-article-header">${articleData.title}</h3>
    <p>
        <span>By: ${articleData.author}</span>
        &nbsp;|&nbsp;
        <span>${articleData.date.toDateString()}</span>
    </p>
    <div>${articleData.body}</div>
</article>
`;
