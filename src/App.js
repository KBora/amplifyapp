import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { API, Storage } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes, listDiplomas } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { createDiploma as createDiplomaMutation, deleteNote as deleteDiplomaMutation } from './graphql/mutations';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

import RepertoireList from './components/RepertoireList';

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

    // Forms
    const [formData, setFormData] = useState(initialFormState);

    // Notes (demo app)
    const [notes, setNotes] = useState([]);
    useEffect(() => {
            
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        await Promise.all(notesFromAPI.map(async note => {
            if (note.image) {
                const image = await Storage.get(note.image);
                note.image = image;
            }
            return note;
        }))
        setNotes(notesFromAPI);
    }

    async function createNote() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        if (formData.image) {
            const image = await Storage.get(formData.image);
            formData.image = image;
        }
        // setNotes([ ...notes, formData ]);
        setFormData(initialFormState);
        fetchNotes();
    }

    async function deleteNote({ id }) {
        const newNotesArray = notes.filter(note => note.id !== id);
        setNotes(newNotesArray);
        await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    }

    async function onChange(e) {
        if (!e.target.files[0]) return
        const file = e.target.files[0];
        setFormData({ ...formData, image: file.name });
        await Storage.put(file.name, file);
        fetchNotes();
    }

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

    async function createDiploma() {
        if (!formData.name || !formData.provider || !formData.instrument) return;
        await API.graphql({ query: createDiplomaMutation, variables: { input: formData } });        
        setFormData(initialFormState);
        fetchDiplomas();
    }

    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <h3>Diploma Fields</h3>
            <input
                onChange={e => setFormData({ ...formData, 'provider': e.target.value })}
                placeholder="Diploma provider"
                value={formData.provider}
            />
            <input
                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Diploma name"
                value={formData.name}
            />
            <input
                onChange={e => setFormData({ ...formData, 'instrument': e.target.value })}
                placeholder="Diploma instrument"
                value={formData.instrument}
            />
            <button onClick={createDiploma}>Create Diploma</button>

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