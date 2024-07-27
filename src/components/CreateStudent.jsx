import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebaseConfig";

function CreateStudent({ getStudents }) {
  const [rollNO, setRollNO] = useState("")
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isCreatingStudent, setISCreatingStudent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setISCreatingStudent(true);
      await addDoc(collection(db, "students"), {
        rollNO: Number(rollNO),
        name: name,
        age: Number(age),
      });
      setRollNO("")
      setName("");
      setAge("");
      setISCreatingStudent(false);
      await getStudents();
    } catch (error) {
      console.log("Error creating User:", error);
      setISCreatingStudent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
         <input
        type="number"
        value={rollNO}
        onChange={(e) => setRollNO(e.target.value)}
        placeholder="Enter Student rollNo"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Student Name"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Student Age"
      />
      <button type="submit">
        {isCreatingStudent ? "creating..." : "create student"}
      </button>
    </form>
  );
}

export default CreateStudent;
