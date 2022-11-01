import { FaClipboardList, FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

import React from 'react';

export default function List() {

    async function handleSave(e) {
        e.preventDefault();

        //fabricante:String,
        //ano: String,
        //combustivel: String,
        //cambio: String,

        const update = await ClientUsers.list();
        if (update.status === 200) {
            toast.success('Usuários listados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }


        const tableBody = document.getElementById('tableData');
        let dataHtml = '';
        let j = 0; 
        for(let person of update.data){
            dataHtml += `<tr><td>${person.fabricante}</td><td>${person.ano}</td><td>${person.combustivel}</td><td>${person.cambio}</td>`;
            j=j+1;    
        }
        tableBody.innerHTML = dataHtml;

    }



    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar Todos">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>

                        <button type="submit">Listar</button>

                    </form>
                </div>

                <div class="table">
                    <table className="form-profile">
                        <thead>
                            <tr>
                                <th>Fabricante</th>
                                <th>Ano</th>
                                <th>Combustivel</th>
                                <th>Cambio</th>
                            </tr>
                        </thead>
                
                        <tbody id="tableData"></tbody>
                
                    </table>
                </div>
            </div>
        </div>
    )
}