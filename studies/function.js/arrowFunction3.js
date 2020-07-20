let comparesWithThis = function (param) {
    console.log(this === param)
}

comparesWithThis(global)

const obj = {}
comparesWithThis = comparesWithThis.bind(obj)
comparesWithThis(global)
comparesWithThis(obj)

let comparesWithThisArrow = param => console.log(this === param)
comparesWithThisArrow(global)
comparesWithThisArrow(module.exports)

comparesWithThisArrow = comparesWithThisArrow.bind(obj)
comparesWithThisArrow(obj)
comparesWithThisArrow(module.exports)