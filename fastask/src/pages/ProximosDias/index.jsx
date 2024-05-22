import CategoriaItem from "../../components/CategoriaItem";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useEffect } from "react";

function ProximosDias() {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);
    const urlApi = "http://localhost:3000";

    function adicionarTarefa(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");
        
        axios.post(`${urlApi}/tarefas/proximos-dias`, {
            descricao: tarefa
        }, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            console.log(resposta);
            toast.success(resposta.data.message);
            setTarefa("");
        }).catch((erro) => {
            console.log(erro);
            toast.error("Erro ao adicionar tarefa");
        })
    }

    function deletarTarefa(id) {
        const token = localStorage.getItem("token");

        axios.delete(`${urlApi}/tarefas/${id}`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            toast.success(resposta.data.message);
        }).catch((erro) => {
            console.log(erro);
            toast.error("Erro ao deletar tarefa");
        })
    }

    useEffect(() => {
        function pegarTarefas() {
            const token = localStorage.getItem("token");

            axios.get(`${urlApi}/tarefas/proximos-dias`, {
                headers: {
                    Authorization: token
                }
            }).then((resposta) => {
                setTarefas(resposta.data);
            }).catch((erro) => {
                console.log(erro);
            })
        }

        pegarTarefas();
    }, [tarefas]);

    return (
        <div>
            <Header />
            <div className="nav-container">
                <Nav />
                <div className="principal">
                    <h1>Próximos 7 dias</h1>
                    <Form inputValor={tarefa} setTarefa={setTarefa} adicionarTarefa={adicionarTarefa} />
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

export default ProximosDias;