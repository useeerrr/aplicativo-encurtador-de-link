function counterRepository(){
    let counter = 0;

    async function  reserverblock(size) {
        return counter += size;
    }

    return { reserveBlock };
}

module.exports = counterRepository;