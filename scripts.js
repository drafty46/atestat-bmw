var pag = [
    ["Seria 3", "index.html"],
    ["E21", "e21.html"],
    ["E30", "e30.html"],
    ["E36", "e36.html"],
    ["E46", "e46.html"],
    ["E90", "e90.html"],
    ["F30", "f30.html"],
    ["G20", "g20.html"],
    ["M3",  "m3.html"],
]

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function free(){
    const loading = document.getElementById("loading");
    loading.style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("body").style.display = "block";
    document.body.style.backgroundImage = "url('images/bg.png')";
}

function loaded(){
    const nav = document.querySelectorAll("ul");
    for (let i = 0;i < pag.length; i++){
        var a = document.createElement("a");
        a.textContent = pag[i][0];
        a.href = pag[i][1];
        if(pag[i][0] == document.title){
            a.style.color = "rgb(0, 255, 64)";
            a.style.pointerEvents = "none";
        }
        var li = document.createElement("li");
        li.appendChild(a);
        nav[0].appendChild(li);
    }
    const video = document.getElementsByClassName("video");
    video[0].volume = 0.2;
    delay(500).then(() => free());
}

