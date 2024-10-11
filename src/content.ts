let isRemoveModal = false
let highlightedElement: HTMLElement | null
let defaultKey = "Alt"

function clearup(element: HTMLElement) {
  element.style.boxShadow = ""
  element.style.borderRadius = ""
  element.style.backgroundColor = ""
}

function dress(element: HTMLElement) {
  element.style.boxShadow = "0 0 10px 5px rgba(255, 0, 0, 0.5)"
  element.style.borderRadius = "5px"
  element.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
}

function hightLight(element: HTMLElement | null) {
  if (highlightedElement) {
    clearup(highlightedElement)
  }
  highlightedElement = element
  if (highlightedElement) {
    dress(highlightedElement)
  }
}

document.addEventListener("mousemove", event => {
  if (isRemoveModal) {
    const element = document.elementFromPoint(
      event.clientX,
      event.clientY
    ) as HTMLElement
    hightLight(element)
  }
})

document.addEventListener("keydown", evnent => {
  if (evnent.key === defaultKey) {
    isRemoveModal = true
  }
})

document.addEventListener("keyup", event => {
  if (event.key === defaultKey) {
    isRemoveModal = false
    hightLight(null)
  }
})

document.addEventListener("click", event => {
  if (highlightedElement && isRemoveModal) {
    if (event.target === highlightedElement) {
      event.preventDefault()
      const target = event.target as HTMLElement
      target.style.transition = "all 0.5s"
      target.offsetHeight
      target.style.transform = `scale(0)`
      setTimeout(() => {
        target.remove()
      }, 500)
    }
  }
})

chrome.storage.sync.get(["key"]).then(data => {
  defaultKey = data.key
})
