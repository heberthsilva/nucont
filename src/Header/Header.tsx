import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';
import insert_db from '../DB/DB';


type Profile = {
    nome: string
    email: string

}


function Header() {

    const { register, handleSubmit } = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {

        alert(JSON.stringify(data))

        insert_db(data.nome, data.email)

    })

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


            <form onSubmit={onSubmit}>

                <div className="div">
                    <div className="sub_div">
                        <text className="forms_title">
                            Fale agora com nossos consultores!
                        </text>
                        <text className="forms_subtitle">
                            Conheça a Consultoria para Contadores e
                            <br /> garanta uma vaga exclusiva na
                            <br /><b>Imersão Nucont</b>
                        </text>
                    </div>
                    <div className="nome">
                        <input ref={register} className="box" type="text" id="nome" placeholder="Nome" required name="nome" />
                    </div>
                    <div className="email">
                        <input ref={register} className="box" type="text" id="email" placeholder="E-mail" required name="email" />
                    </div>
                    <div className="botao">
                        <button type="submit" className="button" >
                            <text className="botton_text">QUERO ACOMPANHAR A SÉRIE</text>
                        </button>
                    </div>

                </div>


            </form>


        </div>

    );
}

export default Header;