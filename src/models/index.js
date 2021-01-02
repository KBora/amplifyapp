// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Piece, Note } = initSchema(schema);

export {
  Piece,
  Note
};