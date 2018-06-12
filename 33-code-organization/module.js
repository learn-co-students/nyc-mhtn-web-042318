function greetingGenerator(name) {
    //var name = name
    return {
        goodMorning:function() {return `Good morning from ${name}`},
        buonGiorno: function() {return `Buongiorno from ${name}`}
    }
}

var greetingFromJason = greetingGenerator('name')