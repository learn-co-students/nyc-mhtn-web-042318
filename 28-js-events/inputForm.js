const form = document.getElementById('greeting-form')
console.log(form)
const greeting = document.getElementById('greeting-field')
const name = document.getElementById('name-field')

form.addEventListener('click',function(event) {
    event.preventDefault()

    console.log(`${greeting.value} ${name.value}`)
    greeting.value = ''
    name.value = ''
})