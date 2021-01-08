// prop > repertoire ID
import React from 'react';

function Diploma(props) {
    return (
        <div className="p-6">
            <h3>
                <span className="font-bold mb-4 text-xl mr-3">{props.diploma.name}</span>
                <span className="text-xl">{props.diploma.instrument}</span>
            </h3>
        </div>
    )
}

export default Diploma;