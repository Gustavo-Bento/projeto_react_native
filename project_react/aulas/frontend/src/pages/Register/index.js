import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.png';

export default function Register(){
    return(
        <div className="register-container">
            <div className="container">
                <section>
                    <img className="imagemlogo"src={logoImg} alt="solidariedade"/>

                    <h1>Cadastro</h1>
                    <p>Cadastre-se e entre para comunidade para ajudar e ser ajudado. Contamos com a colaboração de pessoas como você e para você</p>
                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#FFEED2"/>
                        Não Tenho Cadastro
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da Causa"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{width:80}}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}