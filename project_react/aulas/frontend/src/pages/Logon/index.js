import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import heroesImg from '../../assets/imagem.png';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img className="imagemlogo" src={logoImg} alt="souSolidadrio"/>
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#FFEED2"/>
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>

            <img className="imagemlogo" src={heroesImg} alt="Solidariedade"/>
        </div>
    )
}