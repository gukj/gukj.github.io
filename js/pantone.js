document.getElementById("pantone").onclick = function fun()
    {
        var backgrounds = document.getElementsByClassName("bg-primary");
        for (var i = 0; i < backgrounds.length; i++) {
            backgrounds[i].classList.add("bg-next");
        }
        var texts = document.getElementsByClassName("index-links");
        for (var i = 0; i < texts.length; i++) {
            texts[i].classList.add("c-next");
        }
        var oldColor = document.getElementById("currentPantone");
        oldColor.classList.remove("bg-next");
    }
document.getElementById("currentPantone").onclick = function fun()
    {
        var backgrounds = document.getElementsByClassName("bg-next");
        for (var i = 0; i < backgrounds.length; i++) {
            backgrounds[i].classList.remove("bg-next");
        }
        var texts = document.getElementsByClassName("index-links");
        for (var i = 0; i < texts.length; i++) {
            texts[i].classList.remove("c-next");
        }
        var oldColor = document.getElementById("pantone");
        oldColor.classList.add("bg-next");
        var backgrounds = document.getElementsByClassName("bg-next");
        for (var i = 0; i < backgrounds.length; i++) {
            backgrounds[i].classList.remove("bg-next");
        }
        var texts = document.getElementsByClassName("index-links");
        for (var i = 0; i < texts.length; i++) {
            texts[i].classList.remove("c-next");
        }
        var oldColor = document.getElementById("pantone");
        oldColor.classList.add("bg-next");
    }
