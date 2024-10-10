const input = document.querySelector(".input") as HTMLDivElement
input.textContent = "Options"

let inputMode = false
let key: string | null

function quitEditorMode() {
  inputMode = false
  input.classList.remove("on-input")
  if (key !== input.textContent) {
    input.textContent = key
    chrome.storage.sync.set({ key })
  }
}

input.addEventListener("click", () => {
  if (inputMode) {
    quitEditorMode()
    return
  }
  inputMode = true
  input.classList.add("on-input")
  input.textContent = "请按键盘任意键"
})

document.addEventListener("click", evnent => {
  if (evnent.target !== input) {
    quitEditorMode()
  }
})

document.addEventListener("keydown", event => {
  if (inputMode) {
    key = event.key
    quitEditorMode()
  }
})
