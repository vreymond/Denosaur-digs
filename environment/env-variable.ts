// Import the dotenv module from deno.land
import { config } from "https://deno.land/x/dotenv/dotenv.ts";

const envConfig = config({ safe: true })

console.log(envConfig.ENV_VARIABLE);

// Subprocess commands
const processCommands = Deno.run({
    cmd: ["echo", "hello"]
});

await processCommands.status();

