"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
// CORS setup ---------------------------------
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions));
// Base route ---------------------------------
app.get('/', (req, res) => {
    res.status(200).json({
        message: "API service ON!",
    });
});
// Proxy routes --------------------------------
const routes = [
    {
        context: "/api/auth",
        target: "http://localhost:3001",
        changeOrigin: true,
    },
    {
        context: "/api/notification",
        target: "http://localhost:3002",
        changeOrigin: true,
    },
    {
        context: "/api/user",
        target: "http://localhost:3003",
        changeOrigin: true,
    },
    {
        context: "/api/course",
        target: "http://localhost:3004",
        changeOrigin: true,
    }
];
routes.forEach((route) => {
    app.use(route.context, (0, express_http_proxy_1.default)(route.target));
});
// Start server --------------------------------
const start = () => {
    app.listen(PORT, () => {
        console.log(`The ${process.env.SERVICE} is listening on port ${PORT} thakiyu`);
    });
};
exports.default = { start };
