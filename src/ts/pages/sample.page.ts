import { html } from "lit-html";
import { sampleArticle } from "../articles/sample.article";
import { articleTemplate } from "../models/article.model";
import { IPageData } from "../models/page.model";

const article = articleTemplate(sampleArticle);

export const samplePage: IPageData = {
    title: "Sample Page!!!",
    body: html`
    <div>
        ${article}
    </div>
    `,
};
