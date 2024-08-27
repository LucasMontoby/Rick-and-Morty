import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ image, name, species, type, gender, status, id }) => {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>Species: {species}</p>
                <p>Type: {type}</p>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
                <Link to={`/character/${id}`}>Ver más</Link>
            </div>
        </div>
    );
};

Character.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    type: PropTypes.string,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Character;

