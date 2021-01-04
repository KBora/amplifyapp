/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMovement = /* GraphQL */ `
  subscription OnCreateMovement {
    onCreateMovement {
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
export const onUpdateMovement = /* GraphQL */ `
  subscription OnUpdateMovement {
    onUpdateMovement {
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
export const onDeleteMovement = /* GraphQL */ `
  subscription OnDeleteMovement {
    onDeleteMovement {
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
export const onCreateSpotifyLink = /* GraphQL */ `
  subscription OnCreateSpotifyLink {
    onCreateSpotifyLink {
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
export const onUpdateSpotifyLink = /* GraphQL */ `
  subscription OnUpdateSpotifyLink {
    onUpdateSpotifyLink {
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
export const onDeleteSpotifyLink = /* GraphQL */ `
  subscription OnDeleteSpotifyLink {
    onDeleteSpotifyLink {
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
export const onCreateYouTubeLink = /* GraphQL */ `
  subscription OnCreateYouTubeLink {
    onCreateYouTubeLink {
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
export const onUpdateYouTubeLink = /* GraphQL */ `
  subscription OnUpdateYouTubeLink {
    onUpdateYouTubeLink {
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
export const onDeleteYouTubeLink = /* GraphQL */ `
  subscription OnDeleteYouTubeLink {
    onDeleteYouTubeLink {
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
export const onCreateDiploma = /* GraphQL */ `
  subscription OnCreateDiploma {
    onCreateDiploma {
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
export const onUpdateDiploma = /* GraphQL */ `
  subscription OnUpdateDiploma {
    onUpdateDiploma {
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
export const onDeleteDiploma = /* GraphQL */ `
  subscription OnDeleteDiploma {
    onDeleteDiploma {
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
export const onCreatePiece = /* GraphQL */ `
  subscription OnCreatePiece {
    onCreatePiece {
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
export const onUpdatePiece = /* GraphQL */ `
  subscription OnUpdatePiece {
    onUpdatePiece {
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
export const onDeletePiece = /* GraphQL */ `
  subscription OnDeletePiece {
    onDeletePiece {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
