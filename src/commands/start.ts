import { Commander, PayloadData } from 'shardy';
import { T3Service } from '../T3Service';

/**
 * Add player to search order
 */
export const start = (commander: Commander, payload: PayloadData, service: T3Service) => {
  service.startSearch(commander.cid);
  commander.response(payload);
};
