import React,{useState} from 'react';

const Todo = () => {
    const [tdo,setdo] = useState("");
    const [dolist,setdolist] = useState([]);
    function Addtask(e){
     e.preventDefault();
     setdolist([...dolist,{id:dolist.length+1,title:tdo}]);
     setdo("");
    }
  return (
    <div>
        <form onSubmit={Addtask}>
            <input type='text' placeholder='Enter to do'
            onChange={(e)=>setdo(e.target.value)} 
            value={tdo}/>
            <button>Add task</button>
        </form>
        <ul>
            {
                dolist.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    </div>
  )
}
export default Todo;