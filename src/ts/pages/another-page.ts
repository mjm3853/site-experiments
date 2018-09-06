import { html } from "lit-html";
import { articleTemplate } from "../models/article.model";
import { IPageData } from "../models/page.model";

import { anotherArticle } from "../articles/another.article";

export const anotherPage: IPageData = {
    title: "Another Page",
    body: html`
    ${articleTemplate(anotherArticle)}
    `,
};
