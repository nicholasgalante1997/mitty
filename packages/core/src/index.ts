import process from 'process';
import fs from 'fs';
import { Command } from 'commander';
import Handlebars from 'handlebars';

const program = new Command();

program.name('mitty')
    .description('CLI tool to quickly scaffold http microservices in rust, javascript, and typescript.')
    .version('0.1.0');

program.command('setup')
  .description('the core utility command. scaffolds out a directory ')
