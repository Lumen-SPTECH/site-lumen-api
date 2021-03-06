var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        medida as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        medida as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasB(idSensor, limite_linhas, alteracao) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        (medida * ${alteracao}) as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (medida * ${alteracao}) as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasC(idSensor, limite_linhas, alteracaoC) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        (medida * ${alteracaoC}) as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (medida * ${alteracaoC}) as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasD(idSensor, limite_linhas, alteracaoD) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        (medida * ${alteracaoD}) as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (medida * ${alteracaoD}) as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        medida as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        medida as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealB(idSensor, alteracao) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        (medida * ${alteracao}) as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (medida * ${alteracao}) as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealC(idSensor, alteracaoC) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        (medida * ${alteracaoC}) as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (medida * ${alteracaoC}) as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealD(idSensor, alteracaoD) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        (medida * ${alteracaoD}) as luminosidade, 
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        (medida * ${alteracaoD}) as luminosidade, 
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from registro where fkSensor = ${idSensor} and fkTipo = 1
                    order by idRegistro desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
