import { html } from "lit-html";
import { IPageData } from "../models/page.model";

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
                margin-top: 20%;
            }

            to {
                opacity: 1;
                margin-top: 0%;
            }
        }
    </style>
    <p class="tmp-animate">This is the home page</p>
    <p class="tmp-animate">I will be animated</p>
    `,
};
