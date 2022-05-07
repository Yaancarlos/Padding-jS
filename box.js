let borderRange = document.getElementById("border-range")
let paddingRange = document.getElementById("padding-range")
let contentRange = document.getElementById("content-range")

let borderColor = document.getElementById("border-color")
let paddingColor = document.getElementById("padding-color")
let contentColor = document.getElementById("content-color")

let borderBox = document.querySelector(".border")
let paddingBox = document.querySelector(".padding")
let contentBox = document.querySelector(".content")

borderRange.addEventListener('change', borderRange1)
function borderRange1(){
    borderBox.style.padding = `${borderRange.value}px`
}

paddingRange.addEventListener('change', function(){
    paddingBox.style.padding = `${paddingRange.value}px`
})

contentRange.addEventListener('change', function(){
    contentBox.style.padding = `${contentRange.value}px`
})

borderColor.addEventListener('change', () => {
    borderBox.style.backgroundColor = borderColor.value
})
paddingColor.addEventListener('change', () => {
    paddingBox.style.backgroundColor = paddingColor.value
})
contentColor.addEventListener('change', () => {
    contentBox.style.backgroundColor = contentColor.value
})