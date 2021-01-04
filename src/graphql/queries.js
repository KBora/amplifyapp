/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovement = /* GraphQL */ `
  query GetMovement($id: ID!) {
    getMovement(id: $id) {
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
export const listMovements = /* GraphQL */ `
  query ListMovements(
    $filter: ModelMovementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovements(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncMovements = /* GraphQL */ `
  query SyncMovements(
    $filter: ModelMovementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMovements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getSpotifyLink = /* GraphQL */ `
  query GetSpotifyLink($id: ID!) {
    getSpotifyLink(id: $id) {
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
export const listSpotifyLinks = /* GraphQL */ `
  query ListSpotifyLinks(
    $filter: ModelSpotifyLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpotifyLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncSpotifyLinks = /* GraphQL */ `
  query SyncSpotifyLinks(
    $filter: ModelSpotifyLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpotifyLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getYouTubeLink = /* GraphQL */ `
  query GetYouTubeLink($id: ID!) {
    getYouTubeLink(id: $id) {
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
export const listYouTubeLinks = /* GraphQL */ `
  query ListYouTubeLinks(
    $filter: ModelYouTubeLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYouTubeLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const syncYouTubeLinks = /* GraphQL */ `
  query SyncYouTubeLinks(
    $filter: ModelYouTubeLinkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncYouTubeLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
`;
export const getDiploma = /* GraphQL */ `
  query GetDiploma($id: ID!) {
    getDiploma(id: $id) {
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
export const listDiplomas = /* GraphQL */ `
  query ListDiplomas(
    $filter: ModelDiplomaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiplomas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDiplomas = /* GraphQL */ `
  query SyncDiplomas(
    $filter: ModelDiplomaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDiplomas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPiece = /* GraphQL */ `
  query GetPiece($id: ID!) {
    getPiece(id: $id) {
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
export const listPieces = /* GraphQL */ `
  query ListPieces(
    $filter: ModelPieceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPieces(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Movements {
          nextToken
          startedAt
        }
        SpotifyLinks {
          nextToken
          startedAt
        }
        YouTubeLinks {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPieces = /* GraphQL */ `
  query SyncPieces(
    $filter: ModelPieceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPieces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        Movements {
          nextToken
          startedAt
        }
        SpotifyLinks {
          nextToken
          startedAt
        }
        YouTubeLinks {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
