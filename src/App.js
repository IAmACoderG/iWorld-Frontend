import React from 'react';
// import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { UserDataProvider } from "./contexts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundBeams } from "./components/ui/background-beams";
import Footer from './components/Footer';
import AddNote from './components/AddNote';

function App() {

  const host = "http://localhost:4000";
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const addNote = async (title, discription) => {
    const response = await fetch(`${host}/api/notes/getdata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, discription }) // body data type must match "Content-Type" header
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    console.log(note)
    setNotes(notes.concat(note))
  }

  const allNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setNotes(json);
  }

  const updateNote = async (id, title, discription) => {
    const url = (`${host}/api/notes/updatenote/:${id}`);
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, discription })
    });
    const json = await response.json();
    console.log(json);
    const newNote = JSON.parse(JSON.stringify(notes))
    //logic to Edit in client
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].discription = discription;
        break;
      }
    }
    setNotes(newNote);
  }

  const deleteNote = async (id) => {
    const url = (`${host}/api/notes/deletenote/:${id}`);
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    console.log("deleted noted" + id)
    const afterdel = notes.filter((note) => note._id !== id);
    setNotes(afterdel)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      allNote();
    }
    else {
      navigate("/login");
    }
  }, [navigate])

  return (
    <div className="rounded-md bg-neutral-950 antialiased dark min-h-screen bg-black/[0.96] bg-grid-white/[0.02] italic">
      <UserDataProvider value={{ addNote, allNote, updateNote, deleteNote, notes }}>

        {/* <Header /> */}
        <Navbar/>
        <AddNote />
        <Footer/>

      </UserDataProvider>
      <BackgroundBeams />
    </div>

  )
}
export default App;
// ReactDOM.render(<App />, appElement);
