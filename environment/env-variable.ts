// Import the dotenv module from deno.land
import { config } from "https://deno.land/x/dotenv/dotenv.ts";

/* Access environment variable in the envConfig object
   safe : true is a security check. If environment variables written in
   .env.example are not given, the program will throw an error
*/
const envConfig = config({ safe: true })

// Accessing ENV_VARIABLE from .env file
console.log(envConfig.ENV_VARIABLE);

// Subprocess commands in terminal
const processCommands = Deno.run({
    cmd: envConfig.COMMAND.split(" "),
});

await processCommands.status();