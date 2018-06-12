// function iceCreams() {
//   return fetch('http://localhost:3000/icecreams').then(r=>r.json())
// }

// function createIceCream(body) {
//   const config = {
//     headers:{
//       'Content-type':'application/json'
//     },
//     method:'POST',
//     body:JSON.stringify(body)
//   }
//   return fetch('http://localhost:3000/icecreams',config).then(r=>r.json())
// }

// iceCreams().then(console.log)

// createIceCream({name:'Scoped Vanilla',ingredients:['Lexical Scope','vanilla','sugar']}).then(console.log)


// const IceCreamAdapter = {
//   apiUrl:'http://localhost:3000/icecreams',
//   parseResponse:function(response) {return response.json()},
//   iceCreams:function iceCreams() {
//     return fetch(this.apiUrl).then(this.parseResponse)
//   },
//   createIceCream:function createIceCream(body) {
//     const config = {
//       headers:{
//         'Content-type':'application/json'
//       },
//       method:'POST',
//       body:JSON.stringify(body)
//     }
//     return fetch(this.apiUrl,config).then(this.parseResponse)
//   }
// }

// IceCreamAdapter.iceCreams().then(console.log)

// function generateAdapater(apiUrl) {
//  return {
//   parseResponse:function(response) {return response.json()},
//   index:function iceCreams() {
//     return fetch(apiUrl).then(this.parseResponse)
//   },
//   create:function createIceCream(body) {
//     const config = {
//       headers:{
//         'Content-type':'application/json'
//       },
//       method:'POST',
//       body:JSON.stringify(body)
//     }
//     return fetch(apiUrl,config).then(this.parseResponse)
//   }
// }
// }

// bandjIceCreamsAdapter = generateAdapater('http://localhost:3000/icecreams')
// bandjAdapterIngredients = generateAdapater('http://localhost:3000/ingredients')
// bandjIceCreamsAdapter.index().then(console.log)
// bandjAdapterIngredients.index().then(console.log)


var networkAdapter = {
  parseResponse:function(response) {return response.json()},
  index:function iceCreams() {
    return fetch(this.apiUrl).then(this.parseResponse)
  },
  create:function createIceCream(body) {
    const config = {
      headers:{
        'Content-type':'application/json'
      },
      method:'POST',
      body:JSON.stringify(body)
    }
    return fetch(this.apiUrl,config).then(this.parseResponse)
  }
}

const myBandJAdapter = Object.create(networkAdapter)
myBandJAdapter.apiUrl = 'http://localhost:3000/icecreams'

myBandJAdapter.index().then(console.log)