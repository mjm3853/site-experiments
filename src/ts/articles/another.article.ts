import { html } from "lit-html";
import { IArticleData } from "../models/article.model";

export const anotherArticle: IArticleData = {
    author: "Matt McGrath",
    date: new Date("July 21, 2010"),
    title: "Another Article!!!",
    body: html`
    <div>
        <p>Articles all the way down</p>
        <p>So much great information</p>
    </div>
    `,
};
