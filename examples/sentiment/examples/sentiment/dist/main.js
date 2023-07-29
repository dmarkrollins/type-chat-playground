"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const typechat_1 = require("typechat");
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env") });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsdUNBQXNGO0FBR3RGLGdCQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUU1RCxNQUFNLEtBQUssR0FBRyxJQUFBLDhCQUFtQixFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxNQUFNLE1BQU0sR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkYsTUFBTSxVQUFVLEdBQUcsSUFBQSwrQkFBb0IsRUFBb0IsS0FBSyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRS9GLHNGQUFzRjtBQUN0RixJQUFBLDBCQUFlLEVBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3ZELE1BQU0sUUFBUSxHQUFHLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixPQUFPO0tBQ1Y7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUMifQ==