import react,{Component,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './App.css';


function App(){

  let [Count,setCount]=useState(0);
  let [UnCount,setUnCount]=useState(0);
const [item,currentItem]=useState([]);
const [todo,setTodo]=useState('');
function handleSubmit(e){
  e.preventDefault()
  const n_todo={
    id:new Date().getTime(),
    text:todo,
    completed:false
  }
currentItem([...item].concat(n_todo))
setTodo('')
}
function deleteTodo(id){
  const updateTodo=[...item].filter((todo)=>todo.id!==id)
  currentItem(updateTodo)
}
  return(
    <div class="App">
    <header>
      <p style={{justifyContent:'center',marginLeft:20}}>My Todo App</p>
      <form id="to-do-form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' onClick={()=>setCount(Count+1)}>Add</button>
        
        
        <Text style={{marginLeft:100}}>Count={Count} </Text>
        <Text style={{marginLeft:100}}>Uncount={Count} </Text>
      
      {item.map((todo=>
      <div key={todo.id} >
       
        <input type="text" value={todo.text}/>
        <button  onClick={()=>deleteTodo(todo.id)} onPress={()=>setCount(Count-1)}>Delete</button>
      </div>))}

      </form>
        
   
    </header>
    
    </div>
  );

}


export default App;