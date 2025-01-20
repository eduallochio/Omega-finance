# Documentação do Projeto de Consulta de Ações Financeiras

## Introdução
Este projeto é uma aplicação web para consulta de ações da bolsa de valores brasileira. Ele inclui uma API backend para obter informações financeiras e um frontend que exibe os dados aos usuários de forma interativa.

## Tecnologias Utilizadas

### Backend
- **Python**
- **Flask**: Para criar a API.
- **yfinance**: Para obter dados das ações.
- **Flask-CORS**: Para habilitar o suporte CORS.

### Frontend
- **React**: Framework de JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de build para desenvolvimento frontend.
- **Shadcn**: Para componentes estilizados.
- **Heroicons**: Biblioteca de ícones.

### Estilização
- CSS modular: Cada componente possui um arquivo CSS próprio para organização e manutenção do estilo.

## Estrutura do Projeto

```
project/
├── Backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .env
├── Frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── sidebar/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Dashboard.css
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AcoesBrasileiras.jsx
│   │   └── styles/
│   └── vite.config.js
```

## Funcionalidades

### Backend
- Obtenção de dados financeiros via `yfinance`.
- Consulta personalizada de informações como preço, volume e variação de ações.
- Tratamento de erros e retorno de mensagens claras para o frontend.

### Frontend
- Exibição de informações financeiras de forma interativa.
- Validação de formulário para garantir a entrada correta de dados.
- Menu flutuante com links para "Home" e "Ações Brasileiras".
- Estilização moderna com animações e ícones.

## Configuração e Execução

### Backend
1. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
2. Crie um arquivo `.env` com as configurações necessárias.
3. Execute o servidor:
   ```bash
   python app.py
   ```

### Frontend
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Melhorias Futuras
- Inclusão de filtros para refinar as consultas.
- Suporte à internacionalização (i18n).
- Testes automatizados para garantir a qualidade do código.
- Otimização para dispositivos móveis.

## Contribuição
1. Fork este repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b minha-funcionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Submeta um pull request.

## Contato
- Autor: Eduardo Allochio
- E-mail: [eduallochio2@outlook.com]

---
