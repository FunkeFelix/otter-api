"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongo_1 = require("../utils/mongo");
dotenv_1.default.config();
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, mongo_1.connect)();
        console.log("Connected to MongoDB");
        try {
            api_1.default.listen(process.env.PORT || 3000);
            console.log("Server running");
        }
        catch (err) {
            console.log(err);
        }
    });
}
run().catch(console.dir);
