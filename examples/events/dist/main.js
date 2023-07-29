"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const typechat_1 = require("typechat");
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../../.env") });
const model = (0, typechat_1.createLanguageModel)(process.env);
const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "eventSchema.ts"), "utf8");
const translator = (0, typechat_1.createJsonTranslator)(model, schema, "Event");
// Process requests interactively or from the input file specified on the command line
(0, typechat_1.processRequests)("> ", process.argv[2], async (request) => {
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    const event = response.data;
    console.log(event);
    // if (event.items.some((item) => item.itemType === "unknown")) {
    //   console.log("I didn't understand the following:");
    //   for (const item of order.items) {
    //     if (item.itemType === "unknown") console.log(item.text);
    //   }
    // }
    // printOrder(order);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsdUNBQXNGO0FBR3RGLGdCQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUUvRCxNQUFNLEtBQUssR0FBRyxJQUFBLDhCQUFtQixFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxNQUFNLE1BQU0sR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0UsTUFBTSxVQUFVLEdBQUcsSUFBQSwrQkFBb0IsRUFBUSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRXZFLHNGQUFzRjtBQUN0RixJQUFBLDBCQUFlLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3JELE1BQU0sUUFBUSxHQUFHLE1BQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixPQUFPO0tBQ1Y7SUFDRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEIsaUVBQWlFO0lBQ2pFLHVEQUF1RDtJQUN2RCxzQ0FBc0M7SUFDdEMsK0RBQStEO0lBQy9ELE1BQU07SUFDTixJQUFJO0lBQ0oscUJBQXFCO0FBQ3pCLENBQUMsQ0FBQyxDQUFDIn0=