import React, { useState } from 'react';
import { API } from 'aws-amplify';
import { createDiploma as createDiplomaMutation, deleteDiploma as deleteDiplomaMutation } from '../graphql/mutations';

const initialFormState = { name: '', provider: '', instrument: '' }

function CreateDiploma(props) {
    // Forms
    const [formData, setFormData] = useState(initialFormState);

    async function createDiploma() {
        if (!formData.name || !formData.provider || !formData.instrument) return;
        await API.graphql({ query: createDiplomaMutation, variables: { input: formData } });        
        setFormData(initialFormState);
        props.onDiplomaCreated();
    }

    return  (
        <div className="CreateDiploma">
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
        </div>
    )
}

export default CreateDiploma;