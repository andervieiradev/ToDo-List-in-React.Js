import { Trash } from 'phosphor-react';
interface CardProps{
  id: string;
  item: string;
  checked: boolean;
  onDeleteList: (id: string) => void;
  onCheckList: (id: string) => void;
}

export function List({id, item, checked, onDeleteList, onCheckList}: CardProps){

  function handleDeleteList(){
    onDeleteList(id)
  }

  function handleCheckList(){
    onCheckList(id)
  }

  return (
    <div className="border mb-3 border-gray-400 bg-gray-500 rounded-lg w-auto flex items-center justify-start p-4">
      <div className='mr-4'>
        <input
          onChange={handleCheckList}
          type="checkbox"
          value="true"
          checked={checked}
          className="checked:focus:ring-0 checked:focus:outline-none :focus:outline-none checked:focus:bg-purple focus:ring-0 cursor-pointer w-5 h-5 border-2 checked:border-2 checked:border-purble border-blue hover:bg-blue hover:bg-opacity-40 hover:border-blueDark bg-transparent rounded-full checked:bg-purpleDark checked:hover:bg-purple" />
      </div>
      <div className={` ${checked ? 'text-gray-300 line-through' : 'text-gray-100'} flex-1 leading-6 font-normal text-base`}>
        {item}
      </div>
      <div onClick={handleDeleteList} className="text-gray-300 font-normal text-base cursor-pointer hover:text-danger hover:bg-gray-400 rounded p-1">
        <Trash size={20}/>
      </div>
    </div>
  );
}