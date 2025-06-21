export default function TaskCard({task, onRemover}) {
    return (
        <>
            <li>
                <h3>{task.title}</h3>
                <p>Status: {task.done ? 'Concluída' : 'Pendente'}</p>
                <button className="remover-tarefa" onClick={onRemover}>Remover</button>
            </li>
        </>
    );
}