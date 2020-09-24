import React from 'react';

import '../TopBody/styles.css';

function TopBody() {
    return (
        <div className="div_top">
            <h1 className="title_top">COMO SER ESSENCIAL NA TOMADA DE DECISÃO DAS EMPRESAS?</h1>
            <h2 className="subtitle_top">
                Responder essa pergunta <b> pode ser mais fácil</b> do que parece: <br />
                A Consultoria Contábil é sua aliada para analisar a real situação das empresas.<br />
                No entanto, para colocar em prática, você precisa de informações e dedicação.<br />
                <br />
                <b>Vamos conversar a respeito?</b> 
            </h2>
            <div className="botao_top">
                <button type="submit" className="button_top" >
                <text className="botton_top_text">QUERO ASSISTIR A SÉRIE: CONSULTORIA CONTÁBIL NA PRÁTICA</text>
                </button>
            </div>

        
        </div>

    );
}

export default TopBody;