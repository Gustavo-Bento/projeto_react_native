import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'
import './style.css';

import logoImg from '../../assets/logo.png';

export default function Register(){
    const [name, setName]=userState('');
    const [email, setEmail]=userState('');
    const [whatsapp, setWhatsapp]=userState('');
    const [city, setCity]=userState('');
    const [uf, setUf]=userState('');

    function handleRegister(e){
         e.preventDefault();

         const data ={
             name, email, whatapp, city, uf,
         };
         try{
             const response=await api.post('ongs',data);

             alert('Seu ID de acesso: ${resonse.data.id}');
         } catch (err){
             alert('Erro no cadastro, tente novamente.');
         }
    }
    return(               
        <div className="register-container">
            <div className="content">
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
                    <input 
                    placeholder="Nome da Causa"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                     value={email}
                     onChange={e=>setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp"
                     value={whatsapp}
                     onChange={e=>setWhatsapp(e.target.value)}
                    />
   
                    <div className="input-group">
                        <input placeholder="Cidade"
                         value={city}
                         onChange={e=>setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{width:80}}
                         value={uf}
                         onChange={e=>setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}