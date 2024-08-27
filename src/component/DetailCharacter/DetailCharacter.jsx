import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import { useParams } from 'react-router-dom';

const DetailCharacter = () => {
    let { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del personaje');
                }
                return response.json();
            })
            .then((data) => setCharacter(data))
            .catch((err) => setError(err.message));
    }, [id]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            {character ? <Character {...character} /> : <p>Cargando...</p>}
        </>
    );
}

export default DetailCharacter;
