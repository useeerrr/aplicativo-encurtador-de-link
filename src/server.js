const createApp = require("./app");
const env = require("./config/env");
const createRepositories = require("./repositories");

const app = createApp(createRepositories(env));


app.listen(env.port, () => {
 console.log("API no ar em" + env.baseUrl);
 console.log("Porta: " + env.port);
 console.log("Driver: " + env.driver);
}); 
