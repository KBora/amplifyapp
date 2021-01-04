import React, { useState, useEffect } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { API, Storage } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

import RepertoireList from './components/RepertoireList';

const initialFormState = { name: '', description: '' }

Amplify.configure(awsconfig);

function App() {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = useState();
    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetchNotes();
    }, []);

    const [formData, setFormData] = useState(initialFormState);

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

    return authState === AuthState.SignedIn && user ? (
        <div className="App">
            <h1>My Notes App</h1>
            <pre>
                { user.payload?.email } 
            </pre>
            <input
                onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Note name"
                value={formData.name}
            />
            <input
                onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                placeholder="Note description"
                value={formData.description}
            />
            <input
                type="file"
                onChange={onChange}
            />
            <button onClick={createNote}>Create Note</button>
            <div style={{ marginBottom: 30 }}>
                {
                    notes.map(note => (
                        <div key={note.id || note.name}>
                            <h2>{note.name}</h2>
                            <p>{note.description}</p>
                            <button onClick={() => deleteNote(note)}>Delete note</button>
                            {
                                note.image && <img src={note.image} alt='test' style={{ width: 400 }} />
                            }
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