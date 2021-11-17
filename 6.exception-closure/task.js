function parseCount(value) {
    let result = Number.parseInt(value)
    if (Number.isNaN(result)) throw new Error("Невалидное значение")
    return result
}

function validateCount(value){
    try {
        return parseCount(value)
    } catch (error) {
        return error
    }
}
