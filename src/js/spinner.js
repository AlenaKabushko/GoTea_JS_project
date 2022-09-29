
const spinnerBoxRef = document.querySelector(".spinner-box")

export function spinnerOff() {
    spinnerBoxRef.classList.add("none")
}

export function spinnerOn() {
    spinnerBoxRef.classList.remove("none")
}

