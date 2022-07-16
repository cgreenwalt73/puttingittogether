import {useState} from 'react';

const PersonCard = props => {

    const {person} = props;

    const [state, setState] = useState({person})

    return(
        <div>
            <h1>First Name: {state.person.firstName}</h1>
            <h1>Last Name: {state.person.lastName}</h1>
            <h3>Age: {state.person.age}</h3>
            <h3>Hair Color: {state.person.hairColor}</h3>
        </div>
    );
}

export default PersonCard;