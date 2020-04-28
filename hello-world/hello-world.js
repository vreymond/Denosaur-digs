// Javascript version of Hello-world

// Accessing modules referenced as URLs
import { serve } from "https://deno.land/std@v0.36.0/http/server.ts";

// Server listening on port 8000
const denoServer = serve({ port: 8000 });

console.log("Hello world in terminal (javascript)!");

for await (const req of denoServer) {
  req.respond({ body: "Hello World in browser (javascript)!\n" });
}
