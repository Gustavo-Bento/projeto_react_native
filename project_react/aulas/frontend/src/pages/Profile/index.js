import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import "./style.css"

import logoImg from '../../assets/logo.png'

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="souSolidadrio" />
                <span>Bem vinda, APAD</span>

                <Link to="/incidents/new">Cadastrar novo pedido</Link>
                <button>
                    <FiPower size={18} color="#ec6708"/>
                </button>
            </header>
        </div>
    )
    
}