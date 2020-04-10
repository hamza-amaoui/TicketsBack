import React from "react";
import Person from "./Person";

function NameList() {
    const names = ['Hamza', 'Loubna', 'Asmane', 'Hamza'];
    const persons = [
        {
            id: 1,
            name: 'Hamza',
            age: 26,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Loubna',
            age: 25,
            skill: 'Systeme'
        },
        {
            id: 3,
            name: 'Asmae',
            age: 27,
            skill: 'Marketing'
        },
    ];
    /*const personList = persons.map(person => (
        <Person key={person.id} person={person} />
    ));*/

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);

    return (
        <div>
            {/*personList*/}
            {nameList}
        </div>
    );
}

export default NameList;