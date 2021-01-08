// prop > repertoire ID
import React from 'react';
import PieceCard from './PieceCard';

function RepertoireList(props) {
    return (
        <div className="p-6">
            <h3 className="font-medium mb-4 text-xl">Repertoire List</h3>
            {
                props.pieces.map(piece => (
                    <PieceCard piece={piece} key={piece.id || piece.title}/>
                ))
            }
        </div>
    )
}

export default RepertoireList;