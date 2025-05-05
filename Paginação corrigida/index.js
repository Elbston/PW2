
const express = require('express');
const app = express();
const PORT = 3000;

// Simulação de dados
let placas = ["ABC1234", "DEF5678", "GHI9012", "JKL3456", "MNO7890", "PQR1234", "STU5678", "VWX9012"];

app.use(express.static(__dirname));

app.get('/listar', (req, res) => {
    const inicio = parseInt(req.query.inicio) || 0;
    const limite = parseInt(req.query.limite) || 5;

    const fim = inicio + limite;
    const dadosPaginados = placas.slice(inicio, fim);

    res.json({
        dados: dadosPaginados,
        proximo: fim < placas.length
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
