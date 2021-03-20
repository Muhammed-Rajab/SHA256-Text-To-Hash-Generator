'use script';

const inputBox = document.querySelector("#inputBox");
const submitBtn = document.querySelector("#submitHash");
const boxToDisplayResult = document.querySelector(".hash");

inputBox.addEventListener("input", function() {

    if (inputBox.value.length === 0) {
        boxToDisplayResult.textContent = "Enter text in input box";
        boxToDisplayResult.style.color = "red";
    } else {
        boxToDisplayResult.textContent = sha256(inputBox.value);
        boxToDisplayResult.style.color = "black";
    }

});

function CopyToClipboard(id) {
    let r = document.createRange();

    r.selectNode(document.getElementById(id));

    window.getSelection().removeAllRanges();

    window.getSelection().addRange(r);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();

    alert("Hashed text copied to clipboard")
}

document.querySelector(".generateHash").addEventListener("click", () => {
    if (inputBox.value.length > 0) {
        CopyToClipboard("hash")
    }
});