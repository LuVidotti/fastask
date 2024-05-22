import { useEffect, useState } from "react";
import "./Lista.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Form from "../../components/Form";
import { toast } from "react-toastify";
import CategoriaItem from "../../components/CategoriaItem";

function Lista() {
    const { idLista } = useParams();
    const [nomeLista, setNomeLista] = useState("");
    const urlApi = "http://localhost:3000";
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function adicionarTarefa(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        
        axios.post(`${urlApi}/lista-tarefas`, {
            descricao: tarefa,
            listaId: idLista
        }, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
            setTarefa("");
        }).catch((erro) => {
            console.log(erro);
            toast.error("Erro ao adicionar tarefa");
        })
    }

    function deletarTarefa(id) {
        const token = localStorage.getItem("token");

        axios.delete(`${urlApi}/lista-tarefas/${id}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
        }).catch((erro) => {
            console.log(erro)
            toast.error("Erro ao deletar tarefa");
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(`${urlApi}/lista-tarefas/${idLista}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            setTarefas(resposta.data);
        }).catch((erro) => {
            console.log(erro);
        })
    }, [idLista, tarefas]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(`${urlApi}/listas/${idLista}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            setNomeLista(resposta.data.nome);
        }).catch((erro) => {
            console.log(erro);
        })
    }, [idLista]);

    return (
        <div>
            <Header />
            <div className="nav-container">
                <Nav />
                <div className="principal">
                    <h1>{nomeLista}</h1>
                    <Form inputValor={tarefa} setTarefa={setTarefa} adicionarTarefa={adicionarTarefa}/>
                    <div className="tarefas">
                        {
                            tarefas.map((item) => {
                                return <CategoriaItem key={item._id} titulo={item.descricao} id={item._id} deletarTarefa={deletarTarefa}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lista;