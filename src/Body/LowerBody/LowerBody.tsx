import React from 'react';


import './styles.css';





function LowerBody() {
    return (
        <div className="page">
            <h1 className="title_low_1 ">ESSA SÉRIE É PRA VOCÊ CONTADOR:</h1>
            <ul className="ul_low">
                <li className="li_low">Que quer ter processos contábeis ágeis </li>
                <li className="li_low">Que quer aumentar o valor percebido pelo seu cliente e ajudá-lo na tomada de decisão</li>
                <li className="li_low">Que deseja ver na prática como aplicar uma consultoria contábil eficaz e com método claro</li>
            </ul>
            <p className="p_low"></p>
            <h1 className="title_low_2 ">O QUE SERÁ ABORDADO NA SÉRIE:</h1>
            <ul className="ul_low2">
                <li className="li_low">Análises de indicadores de empresas reais no contexto atual </li>
                <li className="li_low">Doenças financeiras como insolvência, undertrading e excesso de endividamento</li>
                <li className="li_low">Metodologia científica para aplicação de consultoria contábil </li>
                <li className="li_low">Pesquisas e comparativos de mercado para entender o contexto das pequenas empresas na pandemia </li>
            </ul>
            <p className="p_low2"></p>
            <h1 className="title_low_3">QUEM É FERNANDA ROCHA?</h1>
            <table>
                <tr>
                    <td className="td_1">
                    </td>
                    <td className="td_2">
                        <text >
                            <b>Fala galera, beleza?</b><br />
                            <span className="black">Eu sou a Fernanda Rocha,</span> fundadora da Nucont e do Movimento Contabilidade Sem Chatice.
                           <span className="black">Como empresária contábil eu já estive no fundo do poço, a ponto de largar tudo.
                            Até que através da Contabilidade Consultiva me reergui e achei uma maneira de entregar mais valor para
                            as empresas e com isso fui mais valorizada.</span> Cansada de ser tratada como mal necessário, <span className="black">decidi fazer diferente. Corri atrás e resolvi encarar de frente o desafio de aplicar na prática a verdadeira contabilidade. Não foi fácil, muitas vezes me decepcionei, mas </span>me coloquei na missão de mudar para sempre a forma com que Contadores e Empresas se relacionam.<br /> <span className="black">Hoje tenho um compromisso com a classe contábil de replicar tudo o que eu aprendi nessa jornada e garantir que o contador salve empresas e ajude os empresários na tomada de decisões.<br />Vem comigo!</span></text>
                    </td>
                </tr>

            </table>
            <p className="p_low3"></p>

            <table>
                <tr>
                    <td className="td_3">
                        <h2>A Consultoria Contábil na Prática é um série de vídeo gratuita. Será realizada durante o mês de Julho e para ter acesso exclusivo, preencha o formulário ao lado!</h2>
                    </td>
                    <td className="td_4">
                        <form>

                            <div className="div">
                                <div className="sub_div">
                                    <text className="forms_title">
                                        Fale agora com nossos consultores!
                                    </text>
                                    <text className="forms_subtitle2">
                                        Conheça a Consultoria para Contadores e
                                        <br /> garanta uma vaga exclusiva na
                                        <br /><b>Imersão Nucont</b>
                                    </text>
                                </div>
                                <div className="nome">
                                    <input className="box" type="text" id="nome" placeholder="Nome" required name="nome" />
                                </div>
                                <div className="email">
                                    <input className="box" type="text" id="email" placeholder="E-mail" required name="email" />
                                </div>
                                <div className="botao">
                                    <button type="submit" className="button" >
                                        <text className="botton_text">QUERO ACOMPANHAR A SÉRIE</text>
                                    </button>
                                </div>

                            </div>


                        </form>


                    </td>
                </tr>

            </table>
            <p className="p_low4"></p>
            <h1 className="title_low_4 ">ESTAMOS JUNTOS NESSA</h1>
            <p className="p_rodape"></p>
        </div>




    );
}

export default LowerBody;