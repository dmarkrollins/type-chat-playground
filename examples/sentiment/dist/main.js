"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const typechat_1 = require("typechat");
dotenv_1.default.config();
const model = (0, typechat_1.createLanguageModel)(process.env);
const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "sentimentSchema.ts"), "utf8");
const translator = (0, typechat_1.createJsonTranslator)(model, schema, "SentimentResponse");
// Process requests interactively or from the input file specified on the command line
(0, typechat_1.processRequests)("😀> ", process.argv[2], async (request) => {
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    console.log(`The sentiment is ${response.data.sentiment}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsdUNBQXNGO0FBR3RGLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxLQUFLLEdBQUcsSUFBQSw4QkFBbUIsRUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsTUFBTSxNQUFNLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25GLE1BQU0sVUFBVSxHQUFHLElBQUEsK0JBQW9CLEVBQW9CLEtBQUssRUFBRSxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUUvRixzRkFBc0Y7QUFDdEYsSUFBQSwwQkFBZSxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsT0FBTztLQUNWO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQyxDQUFDIn0=