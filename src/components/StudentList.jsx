import { collection,  getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";

function StudentList() {
  const [students, setStudents] = useState([]);
  const studentsCollection = collection(db, "students");

  const getStudents = async () => {
    const studentSnapshot = await getDocs(studentsCollection);
    const studentList = studentSnapshot.docs.map(doc => (
      {
        id: doc.id,
        ...doc.data()
      }
    ))
    console.log(studentList)
    setStudents(studentList)
  };
 
 useEffect(() => {
   getStudents()
 },[students])

  return (
    <>
      <h2>Student List</h2>
    <div className="students-list">
      {students && students.map((student) =>
        {

       return <div key={student.id} className="student">
          <h2>{student.name}</h2>
          <p>{student.age} </p>
           </div>
        }
      
      )}
    </div>
    
    </>
  );
}

export default StudentList;
