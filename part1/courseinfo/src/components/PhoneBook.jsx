import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: "vasanth", number: "12345", id: 1 },
    { name: "raja", number: "67890", id: 2 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (newName.trim() === "" || newNumber.trim() === "") {
      alert("Please enter both name and number");
      return;
    }

    const existingPerson = persons.find(
      (person) =>
        person.name.toLowerCase() === newName.toLowerCase() ||
        person.number === newNumber
    );

    if (existingPerson) {
      alert("Duplicate entry! Name or number already exists.");
      return;
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    // ✅ Correctly update state
    setPersons((prevPersons) => prevPersons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default PhoneBook;
