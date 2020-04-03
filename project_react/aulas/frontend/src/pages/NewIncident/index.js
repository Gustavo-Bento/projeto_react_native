import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi'

import './style.css';

import logoImg from '../../assets/logo.png';

export default function NewIncident(){
    return ( 
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img className="imagemlogo"src={logoImg} alt="solidariedade"/>

                    <h1>Cadrastrar novo pedido ajuda</h1>
                    <p>Descreva seu pedido detalhadamente para que a comunidade possa te ajudar.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#FFEED2"/>
                        Voltar para pagina home
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo da ajuda"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}