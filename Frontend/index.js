import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/acao/PETR4');
        const acao = response.data;
        res.send(`
            <h1>Ação: ${acao.ticker}</h1>
            <p>Preço Atual: R$ ${acao.preco.toFixed(2)}</p>
        `);
    } catch (error) {
        res.send(`<p>Erro ao buscar dados: ${error.message}</p>`);
    }
});

app.listen(PORT, () => {
    console.log(`Frontend rodando em http://localhost:${PORT}`);
});
