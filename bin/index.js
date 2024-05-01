#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

const usage = chalk.green("\nUsage: ai-demo -c <command>");

const options = yargs(hideBin(process.argv))
  .usage(usage)
  .option("c", {
    alias: "command",
    describe: "Command to run",
    type: "string",
    demandOption: false
  })
  .help(true)
  .argv;

function runCommand(command) {
  console.log(chalk.blue("Running command: ", command));
}

if (options.c) {
  runCommand(options.c);
} else if (options.hello) {
  console.log(chalk.green('Hello, world!'));
} else {
  console.log(chalk.red('Goodbye, world!'));
}
