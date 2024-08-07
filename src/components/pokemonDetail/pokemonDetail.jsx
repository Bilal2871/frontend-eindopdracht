import './pokemonDetail.css';
import React, { useState, useEffect } from 'react';

export default function PokemonDetail({ pokemon, onClose }) {

    return ( //Used for the pokemon to put them in a card.
        <>
            <div className="overlay"></div>
            <div className="pokemon-detail-popup">
                <button onClick={onClose}>X</button>
                <div className="pokemon-image">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
                <div className="pokemon-data">
                    <h2>{pokemon.name}</h2>
                    <p>Lengte: {pokemon.height}</p>
                    <p>Gewicht: {pokemon.weight}</p>
                    <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                    <p>Krachten: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                </div>
            </div>
        </>
    );
}