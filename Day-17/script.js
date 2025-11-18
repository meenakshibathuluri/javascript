let boxes = document.querySelectorAll(".box");

let turn0 = true;

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [4, 7, 9],
    [2, 4, 6],
    [3, 6, 9],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
            box.disabled = true;
        } else {
            box.innerText = "X";
            turn0 = true;
            box.disabled = true;
        }
    });
});