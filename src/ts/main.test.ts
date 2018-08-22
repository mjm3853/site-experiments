import sum from "./main";

test("adds 1 + 2 to equal 3", () => {
    document.body.innerHTML = `<div class="typescript-check"></div>`;
    expect(sum(1, 2)).toBe(3);
});
