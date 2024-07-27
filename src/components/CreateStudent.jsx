import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebaseConfig'

const CreateStudent = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [isCreatingStudent, setISCreatingStudent] = useState(false)
    
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try{
        setISCreatingStudent(true)
        await addDoc(collection(db, 'students'), {
            name: name,
            age: Number(age)
        })
        setName('')
        setAge('')
        isCreatingStudent(false)

    } catch (error){
      console.log("Error creating User:", error)
      setISCreatingStudent(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Student Name' required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Student Age' />
        <button type='submit'>{isCreatingStudent ? "creating..." : "create student"}</button>
    </form>
  )
}

export default CreateStudent