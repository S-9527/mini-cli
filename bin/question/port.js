export default () => {
    return {
        message: "set port",
        name: "port",
        type: "number",
        validate: (value) => {
            if (value) return true
            return "port cannot be empty"
        }
    }
}