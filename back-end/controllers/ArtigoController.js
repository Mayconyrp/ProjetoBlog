    const express = require("express");
    const router = express.Router();
    const Artigo = require('../models/Artigo');

    router.post('/artigos', (req, res) => {
        const { Titulo, texto } = req.body;

        Artigo.create({
            Titulo,
            texto
        })
            .then((artigoCriado) => {
                console.log(artigoCriado.toJSON());
                res.status(201).send(artigoCriado);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Erro ao criar o artigo');
            });
    });

    router.get('/artigos', (req, res) => {
        Artigo.findAll()
            .then((artigos) => {
                res.status(200).send(artigos);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Erro ao buscar os artigos');
            });
    });

    router.get('/artigos/:id', (req, res) => {
        const artigoId = req.params.id;

        Artigo.findByPk(artigoId)
            .then((artigo) => {
                if (artigo) {
                    console.log(artigo.toJSON());
                    res.status(200).send(artigo);
                } else {
                    res.status(404).send('Artigo não encontrado');
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Erro ao buscar o artigo');
            });
    });
    router.get('/artigos/:id', (req, res) => {
        const artigoId = req.params.id;

        Artigo.findByPk(artigoId)
            .then((artigo) => {
                if (artigo) {
                    console.log(artigo.toJSON());
                    res.status(200).send(artigo);
                } else {
                    res.status(404).send('Artigo não encontrado');
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Erro ao buscar o artigo');
            });
    });

    router.put('/artigos/:id', (req, res) => {
        const artigoId = req.params.id;
        const { Titulo, texto } = req.body;

        Artigo.findByPk(artigoId)
            .then((artigo) => {
                if (artigo) {
                    artigo.Titulo = Titulo;
                    artigo.texto = texto;

                    artigo.save()
                        .then((artigoAtualizado) => {
                            console.log(artigoAtualizado.toJSON());
                            res.status(200).send(artigoAtualizado);
                        })
                        .catch((error) => {
                            console.error(error);
                            res.status(500).send('Erro ao atualizar o artigo');
                        });
                } else {
                    res.status(404).send('Artigo não encontrado');
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Erro ao buscar o artigo');
            });
    });

    router.delete('/artigos/:id', (req, res) => {
        const artigoId = req.params.id;

        Artigo.destroy({
            where: {
                id: artigoId
            }
        })
            .then(() => {
                res.status(200).send('Artigo excluído com sucesso');
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Erro ao excluir o artigo');
            });
    });

    module.exports = router;
