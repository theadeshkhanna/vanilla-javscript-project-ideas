const btn = document.querySelector(".gen");
const tex = document.querySelector(".name");
const ctc = document.querySelector(".ctc");
const pbr = document.querySelector(".password-box-result");

btn.addEventListener("click", fn1);
ctc.addEventListener("click", fn2);

function fn1() {
    const bigAlpha   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    const nums       = "1234567890";
    const specials   = "!@#$%^&*()_+";

    const num = parseInt(tex.value);

    if(isNaN(num) || (num > 12) || (num < 5)) {
        alert("please write a number between 5 to 12");
        tex.value = "";
        return;
    }

    pbr.innerText = str;
}

function fn2() {
    const textarea = document.createElement("textarea");
    textarea.value = pbr.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Gibberish copied to clipboard");
}
