function createRepositories(xonfig) {
  if (config.driver === "memory") {
    const linksRepository = require ("./memory/links.repository");
    const counterRepository = require ("./memory/Counter.repository");


    return {
        linksRepository,
        counterRepository,
    };
  }
}

module.exports = createRepositories;