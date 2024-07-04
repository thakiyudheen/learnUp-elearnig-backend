"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependencies = void 0;
var useCases = require("../application/useCases");
var repositories = require("../infrastructure/database/mongodb/repositories");
exports.Dependencies = {
    useCases: useCases,
    repositories: repositories
};
