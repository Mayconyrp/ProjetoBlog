const express = require("express");
const router = express.Router();
const User = require('../models/user')
const cors = require('cors');

/*router.get('/autenticado', (req, res) => {
    res.send('autenticado')
});
*/
router.post('/autenticacao', (req, res) => {
    var login = req.body.login;
    var senha = req.body.senha;

    User.findOne({ where: { login, senha } }).then(user => {
        if (user && user !== null) {
            console.log(user);
            console.log('Autenticado com sucesso!');
            res.send('Autenticado')
        } else {
            console.log('Nao autenticado')
            res.send('deu errado')
        }
    });
});

router.get('/teste', (req, res) => {
    res.send("Testando rota do controller");
});

router.post('/usuarios', (req, res) => {
    const { login, senha, nome } = req.body;

    User.create({
        login,
        senha,
        nome
    })
        .then((usuariocadastro) => {
            console.log(usuariocadastro.toJSON());
            res.status(201).send(usuariocadastro);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao criar o usuário');
        });
});

router.get('/lerusuarios', (req, res) => {
    User.findAll()
        .then((usuarios) => {
            res.status(200).send(usuarios);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar os usuários');
        });
});

router.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    const { login, senha, nome } = req.body;

    User.findByPk(userId)
        .then((usuario) => {
            if (usuario) {
                usuario.login = login;
                usuario.senha = senha;
                usuario.nome = nome;

                usuario.save()
                    .then((usuarioAtualizado) => {
                        console.log(usuarioAtualizado.toJSON());
                        res.status(200).send(usuarioAtualizado);
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).send('Erro ao atualizar o usuário');
                    });
            } else {
                res.status(404).send('Usuário não encontrado');
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar o usuário');
        });
});

router.delete("/listar/:id", (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: {
            id: id
        }
    })
        .then(() => {
            res.redirect("/listar");
        })
        .catch((error) => {
            console.log(error);
            res.send("Erro ao excluir usuário.");
        });
});

module.exports = router;
