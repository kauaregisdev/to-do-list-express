export default function Home() {
return (
        <div className="home">
            <h1>Seja bem-vindo ao sistema de controle de tarefas!</h1>
            <h2>Como funciona?</h2>
            <div className="home-guia">
                <p>Acesse a aba de login para poder acessar a galeria, clicando em "Login" logo acima.</p>
                <p>Insira um usuário e uma senha, depois clique em "Entrar". Se a autenticação funcionar, você deve visualizar uma mensagem de sucesso e um botão "Logout".</p>
                <p>Após isso, acesse a aba "Dashboard" e veja as imagens existentes. Adicione mais se desejar, ou, se necessário, delete as que já existem.</p>
                <p>Caso não possua cadastro, vá até a aba de registro e crie um usuário com uma senha. Se o registro funcionar, você deve ser automaticamente redirecionado para o dashboard de tarefas, que evidentemente estará vazio por você ser um usuário recém-cadastrado.</p>
            </div>
        </div>
    );
}