export default () => {
    return {
        message: "set project name",
        name: "packName",
        type: "input",
        validate: (value) => {
            if (value) return true
            return "package name cannot be empty"
        }
    }
}