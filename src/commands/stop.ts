import { Commander, PayloadData } from 'shardy';
import { T3Service } from '../T3Service';

/**
 * Remove player from search order
 */
export const stop = (commander: Commander, payload: PayloadData, service: T3Service) => {
  service.stopSearch(commander.cid);
  commander.response(payload);
};
