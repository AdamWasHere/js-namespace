var ADAMWASHERE = {

    init: function () {
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.textContent = "Adam Nieuwenhuizen";
        document.getElementById("div").className = "box";
        document.getElementById("btn").addEventListener("click");
        document.getElementById("btn").addEventListener("onmouseover");
        document.getElementById("btn").addEventListener("onmouseout");

        document.getElementById("boxes").appendChild(div);
    }
};
