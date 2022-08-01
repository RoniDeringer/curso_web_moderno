//função factory nao tem cache

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}