// fectory function returns new object
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}