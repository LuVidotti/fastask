import Categoria from "../Categoria";
import Item from "../Item";
import Modal from "../Modal";
import "./Nav.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ItemLista from "../ItemLista";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [listas, setListas] = useState([]);
    const [nomeLista, setNomeLista] = useState("");
    const urlApi = "http://localhost:3000";

    function adicionarLista(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        
        axios.post(`${urlApi}/listas`, {
            nome: nomeLista
        }, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
            setNomeLista("");
            setIsOpen(false);
        }).catch((erro) => {
            console.log(erro);
            toast.error("Erro ao adicionar nova lista");
        })
    }

    function excluirLista(idLista) {
        const token = localStorage.getItem("token");

        axios.delete(`${urlApi}/listas/${idLista}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
        }).catch((erro) => {
            console.log(erro);
            toast.error("Erro ao excluir lista");
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(`${urlApi}/listas`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            setListas(resposta.data);
        }).catch((erro) => {
            console.log(erro);
        })
    }, [listas]);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar__tarefas">
                <Categoria>Tarefas</Categoria>
                <ul>
                    <Item itemNome="Hoje" href="/"/>
                    <Item itemNome="Próximos 7 dias" href="/tarefas/proximos-7-dias"/>
                </ul>
            </div>
            <div className="navbar__listas">
                <Categoria>Listas</Categoria>
                <button className="criar-lista" onClick={() => abrirModal()}>Criar lista</button>
                <ul>
                    {
                        listas.map((lista) => {
                            return <ItemLista key={lista._id} idLista={lista._id} itemNome={lista.nome} excluirLista={excluirLista}/>
                        })
                    }
                </ul>
            </div>

            <Modal inputValor={nomeLista} setNomeLista={setNomeLista} isOpen={isOpen} fecharModal={fecharModal} adicionarLista={adicionarLista}/>
        </nav>
    )
}

export default Nav;