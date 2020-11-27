const btn = document.querySelector(".gen");
const tex = document.querySelector(".name");
const ctc = document.querySelector(".ctc");
const gbr = document.querySelector(".gibberish-box-result");

btn.addEventListener("click", fn1);
ctc.addEventListener("click", fn2);

function fn1() {
    const words = "dk asu paksm kad oidn aidlkm aismp optmg iomg pmhf ncv zn ifgnm dpfm sdlckz pohykf xdkn siejf xojg awiod gohm pofhm klfn" +
        "zcrs rino idm fiosmn tiodj zkmdc sodn c ioyphm dfipmv fpfdom dpof kfd gk sofmg dpofmg pofmv nx odprj xidmv sklmfk lskfmd srougn fiong fksjdfm" +
        " dipfmg kcvm iro mv ziodj poi sodubf iptgnm difpnm ahsyvd opyhmf pokhf iodfn ruh sdjnf roieh dilfn drjhogj siodjf iojsf we mslinf fopmg ";
    const words_array = words.split(" ");
    let str = "";

    const num = parseInt(tex.value);

    if(isNaN(num) || (num > 50) || (num < 2)) {
        alert("please write a number between 2 to 50");
        tex.value = "";
        return;
    }

    for (let i = 0; i < num; i++) {
        let rnd = words_array[Math.floor(Math.random() * words_array.length)] + " ";
        str += rnd;
    }

    gbr.innerText = str;
}

function fn2() {
    const textarea = document.createElement("textarea");
    textarea.value = gbr.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Gibberish copied to clipboard");
}
