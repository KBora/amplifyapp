import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { createPiece as createPieceMutation } from '../graphql/mutations';

const initialFormState = { title: '', subtitle: '', composer: '', duration: 0, diplomaID: '552cf7ec-a1c6-4f75-949d-d882f0654fb1'}

function CreatePiece(props) {
    // Forms
    const [formData, setFormData] = useState(initialFormState);

    async function createPiece() {
        if (!formData.title || !formData.composer || !formData.duration) return;
        await API.graphql({ query: createPieceMutation, variables: { input: formData } });        
        setFormData(initialFormState);
    }

    return  (
        <div className="CreatePiece">
            <h3>Piece Fields</h3>
            <input
                onChange={e => setFormData({ ...formData, 'title': e.target.value })}
                placeholder="Piece title"
                value={formData.title}
            />
            <input
                onChange={e => setFormData({ ...formData, 'subtitle': e.target.value })}
                placeholder="Piece subtitle"
                value={formData.subtitle}
            />
            <input
                onChange={e => setFormData({ ...formData, 'composer': e.target.value })}
                placeholder="Piece composer"
                value={formData.composer}
            />
            <input
                onChange={e => setFormData({ ...formData, 'duration': parseInt(e.target.value, 10)})}
                placeholder="Piece duration"
                value={formData.duration}
                type="number"
            />
            <button onClick={createPiece}>Create Piece</button>
        </div>
    )
}

export default CreatePiece;