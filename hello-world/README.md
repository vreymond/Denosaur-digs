# Denosaur Digs

[![MIT License](https://img.shields.io/badge/deno-0.41-yellow?)](https://deno.land/)
[![MIT License](https://img.shields.io/badge/V8%20engine-8.2.308-green?)](https://v8.dev/docs)
[![MIT License](https://img.shields.io/badge/typescript-3.8.3-blue?)](https://www.typescriptlang.org/)


## Hello World

This first directory contains two simple Hello World for Deno. His distinctive characteristic is to support both Javascript and Typescript as first class languages at runtime.

### Run hello world

Simply move to the hello-world directory:

```
cd hello-world/
```

And then you can run the following command to start the hello-world program:

```javascript
// typescript version
deno hello-world.ts

// javascript version
deno hello-world.js
```

By running one of these commands, you will encounter an error:

```bash
error: Uncaught PermissionDenied: network access to "127.0.0.1:8000", run again with the --allow-net flag
► $deno$/ops/dispatch_json.ts:43:11
    at unwrapResponse ($deno$/ops/dispatch_json.ts:43:11)
    at Object.sendSync ($deno$/ops/dispatch_json.ts:72:10)
    at Object.listen ($deno$/ops/net.ts:50:10)
    at listen ($deno$/net.ts:168:18)
    at serve (server.ts:242:20)
    at hello-world.ts:5:20
```

A PermissionDenied error will be emitted by Deno. Basically, Deno does not allow programs to access the network. We need to give him the permission to do so by adding the ```--all-net``` flag in the command. Lets try again:

```javascript
// typescript version
deno --allow-net hello-world.ts

// javascript version
deno --allow-net hello-world.js
```

Deno will compile the file and run it. You can now see in the terminal:

```javascript
// typescript version
Hello world in terminal (typescript)!

// javascript version
Hello world in terminal (javascript)!
```

You can also open your browser and access the following URL:

```
http://localhost:8000/
```

You can now see the Hello World into your browser!
 


## Contributor
|<a href="https://github.com/vreymond"><img alt="Valentin Reymond" src="https://avatars2.githubusercontent.com/u/25683049?s=460&u=2601a55abad686c7bf9176391995a1e4cb73801f&v=4" width=100></a>|
|---|
|[Valentin Reymond](https://github.com/vreymond)|

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/vreymond/Denosaur-digs/blob/master/LICENSE)