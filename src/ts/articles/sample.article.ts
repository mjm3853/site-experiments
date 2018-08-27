import { html } from "lit-html";
import { IArticleData } from "../models/article.model";

export const sampleArticle: IArticleData = {
    author: "Matt McGrath",
    date: new Date("June 15, 1990"),
    title: "Sample Article!!!",
    body: html`
    <div>
        <p>Some nested html literals</p>
    </div>
    `,
};
