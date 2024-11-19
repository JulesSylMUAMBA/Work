"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // => to parse request body with http header "content-type": "application/json"
app.get('/api/liveness', (req, res) => {
    res.send('OK !!!');
});
app.post('/api/todo', (req, res) => {
    console.log("handle http POST /api/todo", req.body);
    res.send('OK !!!');
});
console.log('starting...');
app.listen(3000, () => {
    console.log('Ok, started port 3000, please open http://localhost:3000/swagger-ui');
});
//# sourceMappingURL=app.js.map