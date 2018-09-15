import { html } from "lit-html";
import { imageObjectTemplate } from "../models/imageObject.model";
import { IPageData } from "../models/page.model";

import { anotherArticle } from "../articles/another.article";
import { articleTemplate } from "../models/article.model";

// @ts-ignore
import babyBear from "../../assets/baby-bear1.jpg";

export const homePage: IPageData = {
    title: "Home Page!!!",
    body: html`
    <style>
        .tmp-animate {
            animation-duration: 400ms;
            animation-name: slideUp;
            animation-timing-function: ease-in;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                margin-top: 30%;
            }

            to {
                opacity: 1;
                margin-top: 0%;
            }
        }
    </style>
    <p class="tmp-animate">This is the home page</p>
    <p class="tmp-animate">I will be animated</p>
    ${imageObjectTemplate({
        imagePath: babyBear,
        body: html`${articleTemplate(anotherArticle)}`,
    })}
    `,
};
