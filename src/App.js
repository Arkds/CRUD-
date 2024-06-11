import { useEffect, useState } from 'react';
import { savePerson, getAllPersons, deletePerson, updatePerson } from './application/api';

function App() {
  const [personName, setPersonName] = useState('');
  const [persons, setPersons] = useState([]);
  const [personId, setPersonId] = useState(null);

  useEffect(() => {
    queryPersons();
  }, []);

  async function queryPersons() {
    const docs = await getAllPersons();
    setPersons(docs);
  }

  return (
    <div>
      <input type="text" onChange={e => setPersonId(e.target.value)} placeholder="personId"/>
      <input type="text" onChange={e => setPersonName(e.target.value)} placeholder="personName" />
      <button onClick={async () => {
        await savePerson({ name: personName });
        queryPersons(); // Actualiza la lista después de añadir
      }}>Añadir</button>
      <button onClick={async () => {
        await deletePerson(personId);
        queryPersons(); // Actualiza la lista después de borrar
      }}>Borrar</button>
      <button onClick={async () => {
        await updatePerson(personId, personName);
        queryPersons(); // Actualiza la lista después de actualizar
      }}>Actualizar</button>
      {persons.map(person => <p key={person.id}>{person.id} - {person.name}</p>)}
    </div>  
  );
}

export default App;
