import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { listDiplomas } from './graphql/queries';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

import RepertoireList from './components/RepertoireList';
import CreateDiploma from './components/CreateDiploma';

const initialFormState = { name: '', provider: '' }

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
                fetchDiplomas();
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

    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <CreateDiploma onDiplomaCreated={handleDiplomaCreated}/>

            <div style={{ marginBottom: 30 }}>
                {
                    diplomas.map(diploma => (
                        <div key={diploma.id || diploma.name}>
                            <h2>{diploma.name}</h2>
                            <p>{diploma.provider}</p>
                            <p>{diploma.instrument}</p>
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