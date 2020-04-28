# Denosaur Digs

[![MIT License](https://img.shields.io/badge/deno-0.41-yellow?)](https://deno.land/)
[![MIT License](https://img.shields.io/badge/V8%20engine-8.2.308-green?)](https://v8.dev/docs)
[![MIT License](https://img.shields.io/badge/typescript-3.8.3-blue?)](https://www.typescriptlang.org/)


## Environment

Enviromnent directory work around the .env file and subprocessing in Deno.


### Run environment

Move to the environment directory:

```
cd environment/
```

And then you can run the following command to start the environment program:

```
deno --allow-env --allow-read --allow-run env-variable.ts

// This line come directly from the .env file (value of ENV_VARIABLE)
> I am an environment variable

// This line is the result of a subprocess that execute the command written in the .env file (value of COMMAND)
> 04/28/20-17:50:45
```

The three --allow flag are required.  
```--allow-env``` authorize access to the .env file.  
```--allow-read``` authorize the program to read files (.env here).  
```--allow-run```authorize the program to run a subprocess like command in terminal.

The file ```.env.example``` give the structure of expected environment variables in the .env file. If one or more are empty or missing, the program will throw an error.

You can also find a Makefile to simplify the execution of the program:

```bash
make run

> I am an environment variable
> 04/28/20-17:54:18
```






 


## Contributor
|<a href="https://github.com/vreymond"><img alt="Valentin Reymond" src="https://avatars2.githubusercontent.com/u/25683049?s=460&u=2601a55abad686c7bf9176391995a1e4cb73801f&v=4" width=100></a>|
|---|
|[Valentin Reymond](https://github.com/vreymond)|

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/vreymond/Denosaur-digs/blob/master/LICENSE)