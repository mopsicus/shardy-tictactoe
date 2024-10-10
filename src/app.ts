import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { Logger, LoggerScope, Server, Task, Tools } from 'shardy';
import { T3Service } from './T3Service';
import { T3Validator } from './T3Validator';
import { T3Serializer } from './T3Serializer';

/**
 * Get config and apply
 */
const config = fs.existsSync('.env') ? '.env' : '.env.dev';
dotenv.config({ path: config });

/**
 * Directory with service commands
 */
const COMMANDS_DIR = 'commands';

/**
 * Commands list
 */
const commands = new Map<string, Task>();

/**
 * Local logger
 */
const log = new Logger([], Tools.getTag(module));

/**
 * Load all service commands recursive from files
 *
 * Load from directory, get named function and put to list
 */
const loadCommands = async (): Promise<void> => {
  const ext = '.ts';
  const root = `./src/${COMMANDS_DIR}`;
  Tools.walk(root).forEach(async (file) => {
    const name = path.basename(file, ext);
    const dir = path.parse(file).dir.split(path.sep).slice(1).join(path.sep);
    const task = await import(`./${path.join(dir, name)}`);
    commands.set(name, task[name]);
    log.info(`command ${name} loaded`, LoggerScope.System);
  });
};

/**
 * Init service and run
 */
const init = async (): Promise<void> => {
  log.info(`initialization`, LoggerScope.System);
  await loadCommands();
  const validator = new T3Validator();
  const serializer = new T3Serializer();
  const service = new T3Service();
  const server = new Server(process.env.SERVICE_HOST, process.env.SERVICE_PORT, service, { validator, serializer, commands });
  server.start();
};

init();
