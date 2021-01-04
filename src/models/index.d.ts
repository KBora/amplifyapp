import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Movement {
  readonly id: string;
  readonly title?: string;
  readonly duration?: string;
  readonly pieceID: string;
  readonly order?: number;
  constructor(init: ModelInit<Movement>);
  static copyOf(source: Movement, mutator: (draft: MutableModel<Movement>) => MutableModel<Movement> | void): Movement;
}

export declare class SpotifyLink {
  readonly id: string;
  readonly artist?: string;
  readonly spotifyID?: string;
  readonly pieceID: string;
  constructor(init: ModelInit<SpotifyLink>);
  static copyOf(source: SpotifyLink, mutator: (draft: MutableModel<SpotifyLink>) => MutableModel<SpotifyLink> | void): SpotifyLink;
}

export declare class YouTubeLink {
  readonly id: string;
  readonly artist?: string;
  readonly youTubeID?: string;
  readonly pieceID: string;
  constructor(init: ModelInit<YouTubeLink>);
  static copyOf(source: YouTubeLink, mutator: (draft: MutableModel<YouTubeLink>) => MutableModel<YouTubeLink> | void): YouTubeLink;
}

export declare class Diploma {
  readonly id: string;
  readonly instrument?: string;
  readonly provider?: string;
  readonly name?: string;
  readonly duration?: number;
  readonly criteria?: string;
  readonly Pieces?: (Piece | null)[];
  readonly url?: string;
  constructor(init: ModelInit<Diploma>);
  static copyOf(source: Diploma, mutator: (draft: MutableModel<Diploma>) => MutableModel<Diploma> | void): Diploma;
}

export declare class Piece {
  readonly id: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly duration?: number;
  readonly diplomaID: string;
  readonly comments?: string;
  readonly composer?: string;
  readonly YouTubeLinks?: (YouTubeLink | null)[];
  readonly SpotifyLinks?: (SpotifyLink | null)[];
  readonly Movements?: (Movement | null)[];
  constructor(init: ModelInit<Piece>);
  static copyOf(source: Piece, mutator: (draft: MutableModel<Piece>) => MutableModel<Piece> | void): Piece;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}