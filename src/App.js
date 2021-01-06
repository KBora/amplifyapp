import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { listDiplomas, listPieces } from './graphql/queries';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

import RepertoireList from './components/RepertoireList';
import CreateDiploma from './components/CreateDiploma';
import CreatePiece from './components/CreatePiece';

Amplify.configure(awsconfig);

function App() {
    // Authentication
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = useState();
    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
            if (nextAuthState === AuthState.SignedIn) {
                // fetchDiplomas();
                fetchPieces('552cf7ec-a1c6-4f75-949d-d882f0654fb1');
            }
        });
    }, []);

    // Repertoire Select
    const [diplomas, setDiplomas] = useState([]);
    useEffect(() => {
        fetchDiplomas();
    }, []);

    async function fetchDiplomas() {
        const apiData = await API.graphql({ query: listDiplomas });
        const diplomasFromAPI = apiData.data.listDiplomas.items;
        await Promise.all(diplomasFromAPI.map(async diploma => {
            return diploma;
        }))
        setDiplomas(diplomasFromAPI);
    }

    function handleDiplomaCreated(e) {
        fetchDiplomas();
    }

    // fetch pieces by hard coded diploma
    const [pieces, setPieces] = useState([]);

    async function fetchPieces(diplomaID) {
        const apiData = await API.graphql({
            query: listPieces,
            variables: {
                filter: {
                    diplomaID: {
                        eq: diplomaID
                    }
                }
            }
        });
        const piecesFromAPI = apiData.data.listPieces.items;
        await Promise.all(piecesFromAPI.map(async piece => {
            return piece;
        }))
        setPieces(piecesFromAPI);
    }
    // pass pieces into repertoire list component

    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <CreateDiploma onDiplomaCreated={handleDiplomaCreated}/>
            <hr />
            <CreatePiece />
            <h3>ABRSM Piano</h3>
            <div style={{ marginBottom: 30 }}>
                {
                    pieces.map(piece => (
                        <div key={piece.id || piece.title}>
                            <h2>{piece.title}</h2>
                            <p>{piece.subtitle}</p>
                            <p>{piece.composer}</p>
                            {/* <button onClick={() => deleteNote(note)}>Delete</button> */}
                        </div>
                    ))
                }
            </div>
            <RepertoireList />
            <AmplifySignOut />
        </div>
    ) : (
            <AmplifyAuthenticator usernameAlias="email">
                <AmplifySignUp
                    usernameAlias="email"
                    slot="sign-up"
                    formFields={[
                        { type: "email" },
                        { type: "password" }
                    ]}
                />
            </AmplifyAuthenticator>
        )
}

export default App;