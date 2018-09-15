import { html, TemplateResult } from "lit-html";

export interface IImageObjectData {
    imagePath: any;
    body: string | TemplateResult;
}

export const imageObjectTemplate = (imageObjectData: IImageObjectData) => html`
<style>
    .tmp-image-object {
        display: flex;
        align-items: flex-start;
        margin-bottom: 1em;
    }

    .tmp-image-object--figure {
        width: 150px;
        margin-right: 1em;
    }

    .tmp-image-object--body {
        flex: 1;
    }
</style>
<section class="tmp-image-object">
    <img class="tmp-image-object--figure" src="${imageObjectData.imagePath}" />
    <div class="tmp-image-object--body">${imageObjectData.body}</div>
</section>
`;
