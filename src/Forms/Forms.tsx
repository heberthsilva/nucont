import React from 'react';
import './styles.css';




function Forms() {
    return (

      <form>

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
                <input className="box" type="text" id="nome" placeholder="Nome" required name="nome" />
            </div>
            <div className="email">
                <input className="box" type="text" id="email" placeholder="E-mail" required name="email"/>
            </div>
            <div className="botao">
                <button type="submit" className="button" >
                    <text className="botton_text">QUERO ACOMPANHAR A SÉRIE</text>
                    </button>
            </div>
            


        </div>


        </form>

    );
  
}

export default Forms;