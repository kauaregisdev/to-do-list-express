export default function TaskCard({task, onRemover}) {
    return (
        <>
            <li>
                <h3 className="text-1.2xl font-bold">{task.title}</h3>
                <p>Status: {task.done ? 'Concluída' : 'Pendente'}</p>
                <button className="remover-tarefa" onClick={onRemover}>Remover</button>
            </li>
        </>
    );
}