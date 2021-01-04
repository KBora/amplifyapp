/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMovement = /* GraphQL */ `
  mutation CreateMovement(
    $input: CreateMovementInput!
    $condition: ModelMovementConditionInput
  ) {
    createMovement(input: $input, condition: $condition) {
      id
      title
      duration
      pieceID
      order
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMovement = /* GraphQL */ `
  mutation UpdateMovement(
    $input: UpdateMovementInput!
    $condition: ModelMovementConditionInput
  ) {
    updateMovement(input: $input, condition: $condition) {
      id
      title
      duration
      pieceID
      order
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMovement = /* GraphQL */ `
  mutation DeleteMovement(
    $input: DeleteMovementInput!
    $condition: ModelMovementConditionInput
  ) {
    deleteMovement(input: $input, condition: $condition) {
      id
      title
      duration
      pieceID
      order
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSpotifyLink = /* GraphQL */ `
  mutation CreateSpotifyLink(
    $input: CreateSpotifyLinkInput!
    $condition: ModelSpotifyLinkConditionInput
  ) {
    createSpotifyLink(input: $input, condition: $condition) {
      id
      artist
      spotifyID
      pieceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSpotifyLink = /* GraphQL */ `
  mutation UpdateSpotifyLink(
    $input: UpdateSpotifyLinkInput!
    $condition: ModelSpotifyLinkConditionInput
  ) {
    updateSpotifyLink(input: $input, condition: $condition) {
      id
      artist
      spotifyID
      pieceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpotifyLink = /* GraphQL */ `
  mutation DeleteSpotifyLink(
    $input: DeleteSpotifyLinkInput!
    $condition: ModelSpotifyLinkConditionInput
  ) {
    deleteSpotifyLink(input: $input, condition: $condition) {
      id
      artist
      spotifyID
      pieceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createYouTubeLink = /* GraphQL */ `
  mutation CreateYouTubeLink(
    $input: CreateYouTubeLinkInput!
    $condition: ModelYouTubeLinkConditionInput
  ) {
    createYouTubeLink(input: $input, condition: $condition) {
      id
      artist
      youTubeID
      pieceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateYouTubeLink = /* GraphQL */ `
  mutation UpdateYouTubeLink(
    $input: UpdateYouTubeLinkInput!
    $condition: ModelYouTubeLinkConditionInput
  ) {
    updateYouTubeLink(input: $input, condition: $condition) {
      id
      artist
      youTubeID
      pieceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteYouTubeLink = /* GraphQL */ `
  mutation DeleteYouTubeLink(
    $input: DeleteYouTubeLinkInput!
    $condition: ModelYouTubeLinkConditionInput
  ) {
    deleteYouTubeLink(input: $input, condition: $condition) {
      id
      artist
      youTubeID
      pieceID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDiploma = /* GraphQL */ `
  mutation CreateDiploma(
    $input: CreateDiplomaInput!
    $condition: ModelDiplomaConditionInput
  ) {
    createDiploma(input: $input, condition: $condition) {
      id
      instrument
      provider
      name
      duration
      criteria
      url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Pieces {
        items {
          id
          title
          subtitle
          duration
          diplomaID
          comments
          composer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateDiploma = /* GraphQL */ `
  mutation UpdateDiploma(
    $input: UpdateDiplomaInput!
    $condition: ModelDiplomaConditionInput
  ) {
    updateDiploma(input: $input, condition: $condition) {
      id
      instrument
      provider
      name
      duration
      criteria
      url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Pieces {
        items {
          id
          title
          subtitle
          duration
          diplomaID
          comments
          composer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteDiploma = /* GraphQL */ `
  mutation DeleteDiploma(
    $input: DeleteDiplomaInput!
    $condition: ModelDiplomaConditionInput
  ) {
    deleteDiploma(input: $input, condition: $condition) {
      id
      instrument
      provider
      name
      duration
      criteria
      url
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Pieces {
        items {
          id
          title
          subtitle
          duration
          diplomaID
          comments
          composer
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createPiece = /* GraphQL */ `
  mutation CreatePiece(
    $input: CreatePieceInput!
    $condition: ModelPieceConditionInput
  ) {
    createPiece(input: $input, condition: $condition) {
      id
      title
      subtitle
      duration
      diplomaID
      comments
      composer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Movements {
        items {
          id
          title
          duration
          pieceID
          order
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      SpotifyLinks {
        items {
          id
          artist
          spotifyID
          pieceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      YouTubeLinks {
        items {
          id
          artist
          youTubeID
          pieceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePiece = /* GraphQL */ `
  mutation UpdatePiece(
    $input: UpdatePieceInput!
    $condition: ModelPieceConditionInput
  ) {
    updatePiece(input: $input, condition: $condition) {
      id
      title
      subtitle
      duration
      diplomaID
      comments
      composer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Movements {
        items {
          id
          title
          duration
          pieceID
          order
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      SpotifyLinks {
        items {
          id
          artist
          spotifyID
          pieceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      YouTubeLinks {
        items {
          id
          artist
          youTubeID
          pieceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePiece = /* GraphQL */ `
  mutation DeletePiece(
    $input: DeletePieceInput!
    $condition: ModelPieceConditionInput
  ) {
    deletePiece(input: $input, condition: $condition) {
      id
      title
      subtitle
      duration
      diplomaID
      comments
      composer
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Movements {
        items {
          id
          title
          duration
          pieceID
          order
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      SpotifyLinks {
        items {
          id
          artist
          spotifyID
          pieceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      YouTubeLinks {
        items {
          id
          artist
          youTubeID
          pieceID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
