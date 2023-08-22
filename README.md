# Projeto lista com front-end e back-end

## Back-end (Node.js):

1. Crie um arquivo `.gitignore` global para ignorar arquivos como `node_modules`, `yarn.lock` e `.env` no controle de versão.
2. Crie um arquivo `.env` e `.env.example` global para gerenciar as variáveis de ambiente.
3. Inicialize um projeto Node.js usando `yarn init -y`.
4. Use o CommonJS como módulo de sistema.
5. Organize o código em diferentes arquivos:
   - Use um arquivo `routes.js` no diretório `src/routes` para definir as rotas da API.
   - Use um arquivo `controller.js` no diretório `src/controllers` para lidar com as requisições HTTP.
   - Use um arquivo `service.js` no diretório `src/services` para abstrair a lógica de negócios.
6. Implemente os verbos HTTP para a API: GET, POST, PUT e DELETE para buscar, criar, atualizar e excluir informações no back-end.
7. Utilize as seguintes bibliotecas/frameworks:
   - Node.js
   - Express.js para criar a estrutura da API.
   - dotenv para gerenciar variáveis de ambiente.
   - cors para lidar com a política de mesma origem.
   - mysql2 para interagir com um banco de dados MySQL.
   - nodemon para reiniciar automaticamente o servidor em caso de alterações no código.
8. Considere aprender mais sobre o Swagger para documentar a API.

## Front-end (Angular):

1. Crie um novo projeto Angular usando o comando `ng new lista`.
2. Desenvolva componentes, serviços, pipes, diretivas e outros elementos de interface de usuário necessários para a aplicação.
3. Considere algumas ideias para melhorar a interface do usuário:
   - Use o Angular Material para estilizar os componentes.
   - Escolha a fonte Poppins para a tipografia.
   - Defina uma paleta de cores padrão para o Angular.
4. Considere a inclusão de recursos como um select para escolher o departamento.
5. Use o ThunderClient ou outra ferramenta semelhante para testar a API durante o desenvolvimento.
6. Crie um README para documentar seu projeto, incluindo instruções de configuração, uso e outras informações relevantes.

Certifique-se de que ambos os projetos (front-end e back-end) estejam bem organizados, sigam as melhores práticas de desenvolvimento e sejam devidamente documentados para facilitar a manutenção e colaboração futura. Boa sorte com o desenvolvimento do seu projeto!
