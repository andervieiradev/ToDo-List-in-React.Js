import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { List } from '../App';
import logo from '../assets/logo.svg';


interface HeaderProps {
  onAddList: (list: List) => void;
}

export function Header({onAddList}: HeaderProps){

  const [newListText, setNewListText] = useState('') 

  function handleCreateNewList(event: FormEvent){
    event.preventDefault()

    if(newListText){
      const listToAdd: List = {
        id: (Math.random() + 1).toString(36).substring(7),
        checked: false,
        item: newListText
      }
      
      onAddList(listToAdd)
      setNewListText('');
    }
  }

  function handleNewListTextChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewListText(event.target.value)
  }

  return (
    <header className="bg-gray-700 h-48 flex items-end justify-center overflow-visible p-3">
      <div className="max-w-3xl w-full flex flex-col items-center justify-center">
        <img src={logo} alt="Logo Todo List" className="w-32 mb-10" />

        <form className="flex w-full h-14 -mb-7" onSubmit={handleCreateNewList}>
          <input 
            type="text" 
            className="flex-1 leading-4 font-normal focus:border-purple focus:outline-none focus:shadow-sm rounded-lg text-gray-100 placeholder-gray-300 border-solid border border-gray-700 bg-gray-500 p-4" 
            placeholder="Adicione uma nova tarefa"
            value={newListText}
            onChange={handleNewListTextChange}
            required
            />
          <button 
            type='submit'
            className="flex justify-center font-bold leading-4 items-center w-24 rounded-lg border-0 border-gray-500 text-white bg-blueDark hover:bg-blue ml-2">
              Criar
              <PlusCircle size={18} fontWeight="bold" className="ml-1"/>
          </button>
        </form>
      </div>
    </header>
  )
}