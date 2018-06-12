// const flavors = ['Vanilla','Chocolate','Lemon']

// const ulsContainer = document.getElementById('flavors-container')
// console.log(ulsContainer)


// ulsContainer.addEventListener('click',function(e) {
//     if (e.target.dataset.message) {
//         debugger
//         console.log(e.target.dataset.message)
//     }

//     if (e.target.tagName === 'H1') {
//         console.log('I am a header')
//     }

// })


// flavors.forEach( (flavorString,i) => {
//     addFlavor(flavorString,i)

// } )

// function addFlavor(flavorString,i) {
//     const flavorHTML = `<li class='flavor icecream' data-message='${flavorString}'>${flavorString}</li>`

//     ulsContainer.innerHTML += flavorHTML
//     const li = document.getElementsByTagName('LI')[i]
//     console.log(li)
// }

// // flavors.forEach( (flavorString,i) => {
// //     const flavorDomObj = document.createElement('LI')
// //     ulsContainer.appendChild(flavorDomObj)
// //     flavorDomObj.innerText = flavorString
// //     flavorDomObj.addEventListener('click',function(e) {
// //         console.log(e.target.innerText)
// //     })
// // } )

// const apiAddress = 'http://localhost:3000'
// const carsResource = 'cars'
// const carsResourceAPIAddress = `${apiAddress}/${carsResource}`

// function parseHeaders(response) {
//     return response.json()
// }

// function index() {
//     return fetch(carsResourceAPIAddress).then(parseHeaders)
// }

// function show(id) {
//     return fetch(`${carsResourceAPIAddress}/${id}`).then(parseHeaders)
// }

// function createNewResource(resourceBody) {
//     const config = {
//         method:'POST',
//         headers: {
//             'Content-Type':'application/json',
//             'Data-Type':'application/json'
//         },
//         body:JSON.stringify(resourceBody)
//     }
//     return fetch(carsResourceAPIAddress,config).then(parseHeaders)
// }

// function updateResource(id,resourceBody) {
//     const config = {
//         method:'PATCH',
//         headers: {
//             'Content-Type':'application/json',
//             'Data-Type':'application/json'
//         },
//         body:JSON.stringify(resourceBody)
//     }
//     return fetch(`${carsResourceAPIAddress}/${id}`,config).then(parseHeaders)
// }

// function jasonsDelete(id) {
//     return fetch(`${carsResourceAPIAddress}/${id}`,{method:'DELETE'}).then(parseHeaders)
// }

// const bodyForNewCar = {
//     "model":"WRX",
//     "Year":2015,
//     "Make":"Subaru",
//     "Colours":["red","yellow","orange","blue"]
// }

// const bodyForUpgradedCar = {
//     "Year":2018
// }

// API documentation

// Required headers
// {
//     'Content-Type':'application/json',
//     'Data-Type':'application/json'
// }

// Body structure
// {
//     "model":name of model,
//     "Year":year (integer),
//     "Make":name of make,
//     "Colours":array of strings reppresenting colour names
// }

// const carsContainer = document.getElementById('cars-container')

// index().then( renderCars )

 // const flavors = ['Vanilla','Chocolate','Lemon']

// const ulsContainer = document.getElementById('flavors-container')
// console.log(ulsContainer)


// ulsContainer.addEventListener('click',function(e) {
//     if (e.target.dataset.message) {
//         debugger
//         console.log(e.target.dataset.message)
//     }

//     if (e.target.tagName === 'H1') {
//         console.log('I am a header')
//     }

// })


// flavors.forEach( (flavorString,i) => {
//     addFlavor(flavorString,i)

// } )

// function addFlavor(flavorString,i) {
//     const flavorHTML = `<li class='flavor icecream' data-message='${flavorString}'>${flavorString}</li>`

//     ulsContainer.innerHTML += flavorHTML
//     const li = document.getElementsByTagName('LI')[i]
//     console.log(li)
// }

// // flavors.forEach( (flavorString,i) => {
// //     const flavorDomObj = document.createElement('LI')
// //     ulsContainer.appendChild(flavorDomObj)
// //     flavorDomObj.innerText = flavorString
// //     flavorDomObj.addEventListener('click',function(e) {
// //         console.log(e.target.innerText)
// //     })
// // } )

const apiAddress = 'http://localhost:3000'
const carsResource = 'cars'
const carsResourceAPIAddress = `${apiAddress}/${carsResource}`

function parseHeaders(response) {
    return response.json()
}

function index() {
    return fetch(carsResourceAPIAddress).then(parseHeaders)
}

function show(id) {
    return fetch(`${carsResourceAPIAddress}/${id}`).then(parseHeaders)
}

function createNewResource(resourceBody) {
    const config = {
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Data-Type':'application/json'
        },
        body:JSON.stringify(resourceBody)
    }
    return fetch(carsResourceAPIAddress,config).then(parseHeaders)
}

function updateResource(id,resourceBody) {
    const config = {
        method:'PATCH',
        headers: {
            'Content-Type':'application/json',
            'Data-Type':'application/json'
        },
        body:JSON.stringify(resourceBody)
    }
    return fetch(`${carsResourceAPIAddress}/${id}`,config).then(parseHeaders)
}

function jasonsDelete(id) {
    return fetch(`${carsResourceAPIAddress}/${id}`,{method:'DELETE'}).then(parseHeaders)
}

const bodyForNewCar = {
    "model":"WRX",
    "Year":2015,
    "Make":"Subaru",
    "Colours":["red","yellow","orange","blue"]
}

const bodyForUpgradedCar = {
    "Year":2018
}

// API documentation

// Required headers
// {
//     'Content-Type':'application/json',
//     'Data-Type':'application/json'
// }

// Body structure
// {
//     "model":name of model,
//     "Year":year (integer),
//     "Make":name of make,
//     "Colours":array of strings reppresenting colour names
// }

const carsContainer = document.getElementById('cars-container')
console.log(carsContainer)

index().then( renderCars )

function renderCars(carsObj) {

    carsObj.forEach( carObj => renderCar(carObj) )
}

function renderCar(carObj) {

    const coulorsHTML = carObj.Colours.map( c => `<li>${c}</li>`).join('')
    const carHTML = `
        <div>
            <h1>${carObj.model} made by ${carObj.Make}</h1>
            <p>${carObj.Year}</p>
            <ul>
                ${coulorsHTML}
            </ul>
        </div>
    `
    carsContainer.innerHTML += carHTML
}