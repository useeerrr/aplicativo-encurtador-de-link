function linksRepository() {
    const links = new Map();

    async function save(code, data) {
        if(links.has(code)) {
            throw new Error(`codigo '${code}' já existe,`);
        }

        links.set(code. data);
    }

    async function  find(){
        return links.get(code) ?? null;
    }

    return { save, find };
}

module.exports = linksRepository;