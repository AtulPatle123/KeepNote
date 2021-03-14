import React ,{useState} from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
function App(props){
  const [notes,setNotes]=useState([]);

  function addNote(newNote){
    setNotes((preValue)=>{
      return [...preValue,newNote];
    });
  }

  function deleteNotes(id){
    setNotes(preValue=>{
      return [...preValue.filter((note,index)=>
        index!==id)];
    })
  }
  return(
    <>
      <Header /> 
      <Count count={notes.length ===0 ?"Empty" : `Show ${notes.length} Notes in Database`}/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>{
        return(
          <Note
          key={index}
          id ={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
          />
        );
      })}
    </>
  );
}

export default App;