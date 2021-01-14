// prop > repertoire ID
import React from 'react';
import PieceCard from './PieceCard';

function MyProgram(props) {
    return (
        <div className="p-6">
            <h3 className="font-medium mb-4 text-xl">My Program</h3>
            {
                props.selectedPieces.map(piece => (
                    <PieceCard piece={piece} key={piece.id || piece.title} addPiece={props.addPiece}/>
                ))
            }
        </div>
    )
}

export default MyProgram;