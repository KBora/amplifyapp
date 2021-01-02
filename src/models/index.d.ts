import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Piece {
  readonly id: string;
  readonly title?: string;
  readonly composer?: string;
  readonly duration?: number;
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