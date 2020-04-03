import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import heroesImg from '../../assets/imagem.png';
import logoImg from '../../assets/logo.png';
export default function Logon(){
    const [id, setId]=useState('');
    const history=useHistory();

    function hadleLogin(e){
        e.preventdefault();

        try{
            const response = await api.post('session', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        }catch(err){
             alert('Falha no login, tente novamente');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img className="imagemlogo" src={logoImg} alt="souSolidadrio"/>
                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
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