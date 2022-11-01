import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function Update() {

    const [fabricante, setFabricante] = useState('');
    const [ano, setAno] = useState('');
    const [combustivel, setCombustivel] = useState('');
    const[cambio, setCambio] = useState('');

    async function handleUpdate(e) {
        e.preventDefault();

        const data = {
            fabricante: fabricante,
            ano: ano,
            combustivel: combustivel,
            cambio: cambio
        }

        const update = await ClientUsers.updateUser(data);
        if (update.status === 200) {
            toast.success('Usuário atualizado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }

    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Atualizar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleUpdate}>

                    <label>Fabricante</label>

                        <input type="text" value={fabricante} onChange={(e) => setFabricante(e.target.value)} />

                        <label>Ano</label>
                        <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />

                        <label>Combustivel</label>
                        <input type="text" value={combustivel} onChange={(e) => setCombustivel(e.target.value)} />

                        <label>Cambio</label>
                        <input type="text" value={cambio} onChange={(e) => setCambio(e.target.value)} />

                        <button type="submit">Atualizar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}