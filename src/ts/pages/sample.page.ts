import { html } from "lit-html";
import { articleTemplate } from "../models/article.model";
import { IPageData } from "../models/page.model";

import { anotherArticle } from "../articles/another.article";
import { sampleArticle } from "../articles/sample.article";

export const samplePage: IPageData = {
    title: "Sample Page!!!",
    body: html`
    ${articleTemplate(sampleArticle)}
    ${articleTemplate(anotherArticle)}
    `,
};
