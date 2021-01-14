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
import Navbar from './components/Navbar';
import MyProgram from './components/MyProgram';
import Diploma from './components/Diploma';

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

    const [selectedPieces, setSelectedPieces] = useState([]);
    useEffect(() => {
        setSelectedPieces([]);
    }, []);

    function addPiece(piece) {
        console.log('addPiece, piece', piece);
        setSelectedPieces(selectedPieces.concat(piece));
        console.log(selectedPieces);
    }

    return authState === AuthState.SignedIn && user ? (
        <div>
            <Navbar />
            <div className="bg-gray-200">
                {/* <Diploma diploma={diplomas[1]} /> */}
                <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
                    <div className="col-span-2">
                        {/* <CreateDiploma onDiplomaCreated={handleDiplomaCreated}/>
                        <hr />
                        <CreatePiece />
                        <h3>ABRSM Piano</h3> */}
                        
                        <RepertoireList pieces={pieces} addPiece={addPiece}/>
                    </div>
                    <div>
                        <MyProgram selectedPieces={selectedPieces}/>
                    </div>
                    {/* <AmplifySignOut /> */}
                </div>
            </div>
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