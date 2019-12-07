
const week16cont = document.querySelector(".week16-content")
const week16gate = document.querySelector(".nav-week16")


week16gate.addEventListener(
    "mouseup", () => {
        week16cont.setAttribute("style", "display: block")
    }
)