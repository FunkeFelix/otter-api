"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootRouter = (0, express_1.Router)();
rootRouter.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = rootRouter;
