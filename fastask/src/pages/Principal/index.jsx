import Form from "../../components/Form";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import "./Principal.css";

function Principal() {
    return(
        <div>
            <Header />
            <div className="nav-container">
                <Nav />
                <div className="principal">
                    <h1>Hoje</h1>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Principal;