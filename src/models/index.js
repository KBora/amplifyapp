// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Movement, SpotifyLink, YouTubeLink, Diploma, Piece, Note } = initSchema(schema);

export {
  Movement,
  SpotifyLink,
  YouTubeLink,
  Diploma,
  Piece,
  Note
};