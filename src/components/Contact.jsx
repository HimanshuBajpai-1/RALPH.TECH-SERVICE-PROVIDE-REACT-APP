import React, { useState } from 'react'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../database/connection'
import {toast} from 'react-hot-toast'

const Contact = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  const [sending,setSending] = useState(false)

  const submitHandler = async (e)=>{
    e.preventDefault()
    try {
      setSending(true)
      await addDoc(collection(db,"contact"),{name,email,message})
      setName("")
      setEmail("")
      setMessage("")
      setSending(false)
      toast.success("Messaeg sent Successfully");
    } catch (error) {
      toast.error("Some Error Occured");
      setSending(false)
    }
  }
    return (
    <div className='form'>
      <h1>Contact Us</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name : 
          <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} required/>
        </label>
        
        <label>
          Email : 
          <input type="email" placeholder='Enter Your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </label>

        <label>
          Message : 
          <textarea name="message" cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter Your Query' required></textarea>
        </label>        
        <button type="submit" className={sending ? "disableBtn" : ""} >send</button>
      </form>
    </div>
  )
}

export default Contact