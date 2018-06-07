// Write our first event listener and handler here
const ear = document.getElementById('listen-for-event')
console.log(ear)

// const eventHandler = (event,value) => {
//     debugger
//     console.log('Something happened.... perhaps....')
// }

const eventHandler = event => {
    console.log('Something happened.... perhaps....')
}

//const somethingVeryImportant = 'fasdfasdf'

ear.addEventListener( 'click', eventHandler  )