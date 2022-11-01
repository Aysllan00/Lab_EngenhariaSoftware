import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

import React from 'react';

export default function ListUser() {

    const [fabricante, setFabricante] = useState('');

    async function handleDelete(e) {
        e.preventDefault();

        const data = {
            fabricante: fabricante
        }

        const update = await ClientUsers.listUser(data);
        
        if (update.status === 200) {
            toast.success('Usuário encontrado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }

        
        const tableBody = document.getElementById('tableData');
        let dataHtml = '';
   
        dataHtml += `<tr><td>${update.data.fabricante}</td><td>${update.data.ano}</td><td>${update.data.combustivel}</td><td>${update.data.cambio}</td>`;
 
        
        tableBody.innerHTML = dataHtml;
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar por Fabricante">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleDelete}>

                        <label>Fabricante</label>
                        <input type="text" value={fabricante} onChange={(e) => setFabricante(e.target.value)} />

                        <button type="submit">Procurar</button>
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