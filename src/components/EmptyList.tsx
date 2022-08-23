import clipboard from '../assets/clipboard.png';

export function EmptyList(){
  return (
    <div className="border-t border-gray-400 rounded-lg w-auto h-64 flex flex-col items-center justify-center">
      <img src={clipboard} className="w-14 mb-4" />

      <span className="text-gray-300 font-bold text-base">
        Você ainda não tem tarefas cadastradas
      </span>
      <span className="text-gray-300 font-normal text-base">
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  );
}