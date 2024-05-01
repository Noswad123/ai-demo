#!/usr/bin/env node

import { exec } from 'child_process';
import yargs from 'yargs';
import chalk from 'chalk';

const usage = chalk.green("\nUsage: ai-demo -c <command> [args]");

const options = yargs(process.argv.slice(2))
  .usage('$0 <cmd> [args]')
  .option('hello', {
    boolean: true,
    default: false,
    describe: 'Say hello world'
  })
  .option('c', {
    alias: 'c',
    describe: 'Command to run',
    type: 'string'
  })
  .option('t', {
    alias: 't',
    describe: 'Display the current time',
    type: 'boolean'
  })
  .help()
  .argv;

function runCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}

if (options.hello) {
  console.log(chalk.green('Hello'));
} else if (options.c) {
  runCommand(options.c);
} else if (options.t) {
  console.log(new Date().toLocaleTimeString());
} else {
  console.log(chalk.red('Goodbye'));
}