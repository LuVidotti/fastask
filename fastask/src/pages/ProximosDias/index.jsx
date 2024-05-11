import Header from "../../components/Header";
import Nav from "../../components/Nav";

function ProximosDias() {
    return (
        <div>
            <Header />
            <div className="nav-container">
                <Nav />
                <div>
                    <h1>
                        Proximos 7 dias
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ProximosDias;