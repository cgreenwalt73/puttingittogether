import {useState} from 'react';

const PersonCard = props => {

    const {person} = props;

    const [age, setAge] = useState(person.age)

    return(
        <div>
            <h2>First Name: {person.firstName}</h2>
            <h2>Last Name: {person.lastName}</h2>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {person.hairColor}</h3>
            <button onClick={ () => setAge(age+1) }> {person.firstName}'s Birthday </button>
        </div>
    );
}

export default PersonCard;