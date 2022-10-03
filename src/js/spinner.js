
const spinnerBoxRef = document.querySelector(".spinner-box")

export function spinnerOff() {
    spinnerBoxRef.classList.add("none")
}

export function spinnerOn() {
    console.log("sp work")
    spinnerBoxRef.classList.remove("none")
}

