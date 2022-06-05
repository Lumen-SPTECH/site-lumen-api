var medidaModel = require("../models/medidaModel");

var alteracaoB = 0.8;

var alteracaoC = 0.7;

var alteracaoD = 0.9;

//  INICIO BUSCAR ULTIMAS MEDIDAS

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idSensor = req.params.idSensor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idSensor, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasB(req, res) {

    const limite_linhas = 7;
    

    var idSensor = req.params.idSensor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasB(idSensor, limite_linhas, alteracaoB).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasC(req, res) {

    const limite_linhas = 7;
    

    var idSensor = req.params.idSensor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasC(idSensor, limite_linhas, alteracaoC).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasD(req, res) {

    const limite_linhas = 7;
    

    var idSensor = req.params.idSensor;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidasD(idSensor, limite_linhas, alteracaoD).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// FIM BUSCAR ULTIMAS MEDIDAS

// INICIO BUCAR MEDIDAS EM TEMPO REAL

function buscarMedidasEmTempoRealD(req, res) {

    var idSensor = req.params.idSensor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealD(idSensor, alteracaoD).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealC(req, res) {

    var idSensor = req.params.idSensor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealC(idSensor, alteracaoC).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealB(req, res) {

    var idSensor = req.params.idSensor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealB(idSensor, alteracaoB).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idSensor = req.params.idSensor;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idSensor).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidasB,
    buscarUltimasMedidasC,
    buscarUltimasMedidasD,
    buscarMedidasEmTempoReal,
    buscarMedidasEmTempoRealB,
    buscarMedidasEmTempoRealC,
    buscarMedidasEmTempoRealD
}