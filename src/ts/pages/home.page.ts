import { html } from "lit-html";
import { imageObjectTemplate } from "../models/imageObject.model";
import { IPageData } from "../models/page.model";

import { anotherArticle } from "../articles/another.article";
import { sampleArticle } from "../articles/sample.article";
import { articleTemplate } from "../models/article.model";

// @ts-ignore
import babyBear from "../../assets/baby-bear1.jpg";
// @ts-ignore
import tsLogo from "../../assets/ts.png";

export const homePage: IPageData = {
    title: "Home Page!!!",
    body: html`
    ${imageObjectTemplate({
        imagePath: babyBear,
        body: html`${articleTemplate(sampleArticle)}`,
    })}
    ${imageObjectTemplate({
        imagePath: tsLogo,
        body: html`${articleTemplate(anotherArticle)}`,
    })}
    `,
};
