var someVar = "1", result = null

switch (someVar) {
    case 1:
        result = "Number 1"
        break;
    case "1":
        result = "String 1"
        break
    default:
        result = "Don't know"
        break;
}

console.log(result)