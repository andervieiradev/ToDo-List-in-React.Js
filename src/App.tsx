
import { useState } from 'react';
import { Header } from './components/Header';
import { EmptyList } from './components/EmptyList';
import { List } from './components/List';

import './styles/global.css';

export interface List {
  id: string;
  checked: boolean;
  item: string;
}

function App() {
  const [lists, setNewLists] = useState<List[]>([])

  function deleteList(idToDelete: string){
    const listsWithoutDeletedOne = lists.filter(list => {
      return list.id !== idToDelete;
    })

    setNewLists(listsWithoutDeletedOne);
  }

  function checkList(idToCheck: string){
    const listsSyncedWithChecked = lists.map(list => {
      if(list.id !== idToCheck){ return list }
      return {
        ...list,
        checked: !list.checked
      }
    })

    setNewLists(listsSyncedWithChecked);
  }

  function onAddList(listToAdd: List){
    setNewLists([...lists, listToAdd]);
  }

  const completed = (
    lists.length > 0 ? lists.filter((item) => {
      return item.checked
    }).length + ' de ' + lists.length : lists.length
  );
  
  return (
    <div> 
      <Header
        onAddList={onAddList}
      />

      <div className='mt-16 h-80 flex flex-col items-center justify-start p-3'>
        <div className='max-w-3xl w-full flex justify-between'>
            <div className="text-blue font-bold text-sm">
              Tarefas criadas 
              <span className='bg-gray-400 rounded-lg px-2 py-1 text-xs font-bold leading-4 ml-2 text-white'>{lists.length}</span>
            </div>
            <div className='text-purple font-bold text-sm'>
              Concluídas 
              <span className='bg-gray-400 rounded-lg px-2 py-1 text-xs font-bold leading-4 ml-2 text-white'>
                { completed }
              </span>
            </div>
        </div>

        <div className='mt-6 w-full max-w-3xl'>
          { lists.length === 0 && <EmptyList  /> }
          {
            lists.map(item => {
              return (
                <List 
                  key={item.id} 
                  id={item.id} 
                  item={item.item} 
                  checked={item.checked} 
                  onDeleteList={deleteList}
                  onCheckList={checkList}
                />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default App
