const btn = document.querySelector(".gen");
const tex = document.querySelector(".name");
const bAlpha = document.querySelector(".bigalpha");
const sAlpha = document.querySelector(".smallalpha");
const numt = document.querySelector(".num");
const special = document.querySelector(".special");
const ctc = document.querySelector(".ctc");
const pbr = document.querySelector(".password-box-result");

btn.addEventListener("click", fn1);
ctc.addEventListener("click", fn2);

function fn1() {
    const bigAlpha   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    const nums       = "1234567890";
    const specials   = "!@#$%^&*()_+";
    let str          = "";
    let checked      = [];

    const num = parseInt(tex.value);

    if(isNaN(num) || (num > 12) || (num < 5)) {
        alert("please write a number between 5 to 12");
        tex.value = "";
        return;
    }

    if(bAlpha.checked) {
        checked.push("bAlpha");
    }

    if(sAlpha.checked) {
        checked.push("sAlpha");
    }

    if(numt.checked) {
        checked.push("numt");
    }

    if(special.checked) {
        checked.push("special");
    }

    if(checked.length === 0) {
        alert("please select one or more category");
        return;
    }

    for (let i = 0; i < num; i++) {
        let rndElem = checked[Math.floor(Math.random() * checked.length)];

        switch(rndElem) {
            case "bAlpha" : {
                str = str + bigAlpha[Math.floor((Math.random() * bigAlpha.length))];
            }
            break;
            case "sAlpha" : {
                str = str +  smallAlpha[Math.floor((Math.random() * smallAlpha.length))];
            }
            break;
            case "numt" : {
                str = str +  nums[Math.floor((Math.random() * nums.length))];
            }
            break;
            case "special" : {
                str = str +  specials[Math.floor((Math.random() * specials.length))];
            }
            break;
        }

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
    alert("Password copied to clipboard");
}
