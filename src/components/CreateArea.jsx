import React , {useState} from "react";
import {IoIosAdd} from "react-icons/io";

function CreateArea({submitButton , onAdd}) {
  const [isExpanded,setExpanded]=useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

function handleChange(event){
    const {name,value} = event.target;
    setNote((preValue)=>{
        return {
            ...preValue,
            [name]: value,
        }
    })
}

function submitButton(event) {
    onAdd(note);
    setNote(
        {
            title: "",
            content: "",
        }
    );
    event.preventDefault();
}

function handleExpended(){
    setExpanded(true);
}

  return (
    <div>
      <form>
        {isExpanded && (
        <input
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          autoComplete="off"
        />
        )}
        <p>
          <textarea
           value = {note.content}
           onClick={handleExpended}
           name="content" 
           placeholder="Take a note" 
           onChange={handleChange}
           rows = {isExpanded ? 3:1}
           />
        </p>

        <button onClick={submitButton}>
            <IoIosAdd size={35}/>
        </button>

      </form>
    </div>
  );
}

export default CreateArea;
