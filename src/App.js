import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const person1={
    firstName: 'Harry',
    lastName: 'Potter',
    age: 17,
    hairColor: 'Brown'
  }
  const person2={
    firstName: 'Ron',
    lastName: 'Weasley',
    age: 18,
    hairColor: 'Red'
  }
  const person3={
    firstName: 'Hermione',
    lastName: 'Granger',
    age: 18,
    hairColor: 'Brown'
  }
  const person4={
    firstName: 'Ginny',
    lastName: 'Weasley',
    age: 16,
    hairColor: 'Red'
  }

  return (
    <div className="App">
      <PersonCard person={person1} />
      <PersonCard person={person2} />
      <PersonCard person={person3} />
      <PersonCard person={person4} />
    </div>
  );
}

export default App;
