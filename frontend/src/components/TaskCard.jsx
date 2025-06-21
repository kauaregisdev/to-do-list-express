export default function TaskCard({task, onRemover}) {
    return (
        <>
            <li className="bg-white shadow-md rounded p-4 mb-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-600">Status: {task.done ? 'Concluída' : 'Pendente'}</p>
                <button className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded hover:bg-red-600 transition" onClick={onRemover}>Remover</button>
            </li>
        </>
    );
}