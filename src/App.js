import React,{useState} from 'react';

export default function App(){
  const[tarefa,setTarefa]=useState('')
  const[listaDeTarefa,setListaDeTarefa]=useState([])

  const add=() => {
   if(tarefa.trim() !== ''){
    setListaDeTarefa(listaDeTarefa.concat({tarefa,id:Date.now()}));
    setTarefa('')
   }
  }

  const remove=(id) => {
    setListaDeTarefa(listaDeTarefa.filter(item => {
      return item.id != id
    }))
  }

  const handleChange=(event) => {
    if(event.key === 'Enter'&& tarefa.trim()!== ''){
      setListaDeTarefa(listaDeTarefa.concat({tarefa,id:Date.now()}));
      setTarefa('')
    }
  }

  return(
   <>
    <h1>To do List</h1>
    <input value={tarefa} onKeyDown={(event) => {handleChange(event)}} onChange={(event) => {setTarefa(event.target.value)}}/>
    <button onClick={() => {add()}}>Adicionar</button>
    <section>{listaDeTarefa.map(item => (
      <ul>
        <li>{item.tarefa}</li>
        <button onClick={() => {remove(item.id)}}>X</button>
      </ul>
    ))}</section>
  </>
  )
}