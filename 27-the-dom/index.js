//console.log("Yep")
const container = document.getElementById('container')
//console.log(container)
const header = document.createElement('h1')
header.innerText = 'rspectGram'
container.appendChild(header)
//console.log(header)
let imgId = 0
images.forEach( imgStr => {
    //1. create img obj
    const img = document.createElement('img')
    img.id = `img-id-${++imgId}`
    //2. update src attribute
    img.src = imgStr
    console.log(img)
    //3. append to container
    container.appendChild(img)
} )
