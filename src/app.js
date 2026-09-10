const express = require('express');
const codesService = require('./services/codes.service'); 
const baseService = require("./services/base.service");
const linksController = require("./controllers/links.controller");
const counterRepository = require("./repositories/memory/Counter.repository");
const linksRepository = require('./repositories/memory/links.repository');
const app = express();


function startApp() {
    const codes = codesService(counterRepository, baseService,
        1000); 

    const links = linksService(linksRepository, codesService, 10, 
        256);

    const linksRouterController = linksController(linksService, "/", 
        30);    
}

module.exports = app;