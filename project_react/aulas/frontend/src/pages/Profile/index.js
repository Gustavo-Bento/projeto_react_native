import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

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
            <h1>Pedidos de Ajuda Cadastrados</h1>

            <ul>
                <li>
                    <strong>CALSA:</strong>
                    <p>Caso de procura-se um novo emprego</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Atualmente em uma empresa que não me valoriza, procuro um novo emprego para dar mais sentido a minha vida;</p>
                    <strong>VALOR</strong>
                    <p>R$ 2500,00</p>

                    <button>
                        <FiTrash2 size={} color="rgb(167,137,89)"/>
                    </button> 
                </li>
                <li>
                    <strong>CALSA:</strong>
                    <p>Caso de procura-se um novo emprego</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Atualmente em uma empresa que não me valoriza, procuro um novo emprego para dar mais sentido a minha vida;</p>
                    <strong>VALOR</strong>
                    <p>R$ 2500,00</p>

                    <button>
                        <FiTrash2 size={} color="rgb(167,137,89)"/>
                    </button> 
                </li>
                <li>
                    <strong>CALSA:</strong>
                    <p>Caso de procura-se um novo emprego</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Atualmente em uma empresa que não me valoriza, procuro um novo emprego para dar mais sentido a minha vida;</p>
                    <strong>VALOR</strong>
                    <p>R$ 2500,00</p>

                    <button>
                        <FiTrash2 size={} color="rgb(167,137,89)"/>
                    </button> 
                </li>
                <li>
                    <strong>CALSA:</strong>
                    <p>Caso de procura-se um novo emprego</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Atualmente em uma empresa que não me valoriza, procuro um novo emprego para dar mais sentido a minha vida;</p>
                    <strong>VALOR</strong>
                    <p>R$ 2500,00</p>

                    <button>
                        <FiTrash2 size={} color="rgb(167,137,89)"/>
                    </button> 
                </li>
            </ul>
        </div>
    )
    
}