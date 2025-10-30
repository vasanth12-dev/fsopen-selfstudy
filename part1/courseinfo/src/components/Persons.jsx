const Persons = ({ persons }) => {
  return (
    <ol>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name}: {person.number}
        </li>
      ))}
    </ol>
  );
};

export default Persons;
