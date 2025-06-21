export default function Home() {
return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Seja bem-vindo ao sistema de controle de tarefas!</h1>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Como funciona?</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
                <p className="mb-2">Acesse a aba de login para poder acessar a galeria, clicando em <span className="font-medium text-blue-600">"Login"</span> logo acima.</p>
                <p className="mb-2">Insira um usuário e uma senha, depois clique em <span className="font-medium text-blue-600">"Entrar"</span>. Se a autenticação funcionar, você deve visualizar uma mensagem de sucesso e um botão <span className="font-medium text-green-600">"Logout"</span>.</p>
                <p className="mb-2">Após isso, acesse a aba <span className="font-medium text-blue-600">"Tarefas"</span> e veja as imagens existentes. Adicione mais se desejar, ou, se necessário, delete as que já existem.</p>
                <p>Caso não possua cadastro, vá até a aba de <span className="font-medium text-blue-600">registro</span> e crie um usuário com uma senha. Se o registro funcionar, você deve ser automaticamente redirecionado para o dashboard de tarefas, que evidentemente estará vazio por você ser um usuário recém-cadastrado.</p>
            </div>
        </div>
    );
}