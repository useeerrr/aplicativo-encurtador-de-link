const express = require('express');
const codesService = require('./services/codes.service'); 
const baseService = require("./services/base.service");
const linksController = require("./controllers/links.controller");
const counterRepository = require("./repositories/memory/Counter.repository");
const linksRepository = require('./repositories/memory/links.repository');
const app = express();
const createLinksRoutes = require(".routes/links.routes");


function startApp({counterRepository, linksRepository}) {
    const codes = codesService(counterRepository, baseService,
        1000); 

    const links = linksService(linksRepository, codes, 10, 
        256);

    const linksRouterController = linksController(links, "/", 
        30);    

        const app = express();
        app.use(express.json());
        app.use(createLinksRoutes(linksRouterController))

        return app;
}

module.exports = startApp;