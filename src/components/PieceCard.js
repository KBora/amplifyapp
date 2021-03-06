import React from 'react';

function PieceCard(props) {
    return (
        <div className="rounded-lg shadow bg-white p-6 mb-2 flex flex-row justify-between">
            <div className="w-40 font-bold">{props.piece.composer}</div>
            <div className="w-full">
                <div>{props.piece.title}</div>
                <div className="italic">{props.piece.subtitle}</div>
            </div>
            <div className="w-10 font-light">
                <div>{new Date(props.piece.duration * 1000).toISOString().substr(14, 5)}
                </div>
            </div>            
            <button onClick={() => props.addPiece(props.piece)}>Add</button>
        </div>
    )
}

export default PieceCard;