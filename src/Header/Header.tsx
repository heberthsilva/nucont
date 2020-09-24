import React from 'react';
import Forms from '../Forms/Forms';
import './styles.css';





function Header() {
    return (
        <div className="header-1">
            <h1 className="title">
                CONSULTORIA CONTÁBIL NA PRÁTICA
            </h1>

            <h2 className="subtitle">
                <b>Identifique</b> situações problemáticas nas empresas através
            de análise de indicadores e entenda como fazer uma consultoria contábil eficiente.
            Seja o responsável por ajudar as pequenas empresas a se recuperarem dos impactos gerados pela crise
            econômica, aplicando a contabilidad como ciência.
            </h2>

            <h2 className="guest">
                com Fernanda Rocha - CEO da Nucont
            </h2>
        
            <Forms />

        </div>

    );
}

export default Header;