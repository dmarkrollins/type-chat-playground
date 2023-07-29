import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";
import { Event } from "./eventSchema";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

const model = createLanguageModel(process.env);
const schema = fs.readFileSync(path.join(__dirname, "eventSchema.ts"), "utf8");
const translator = createJsonTranslator<Event>(model, schema, "Event");

// Process requests interactively or from the input file specified on the command line
processRequests("> ", process.argv[2], async (request) => {
    const response = await translator.translate(request);
    if (!response.success) {
        console.log(response.message);
        return;
    }
    const event = response.data;
    console.log(JSON.stringify(event, null, 4))
    // if (event.items.some((item) => item.itemType === "unknown")) {
    //   console.log("I didn't understand the following:");
    //   for (const item of order.items) {
    //     if (item.itemType === "unknown") console.log(item.text);
    //   }
    // }
    // printOrder(order);
});