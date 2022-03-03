import { useState } from "react";

const Card = () => {

    const [valor, setValor] = useState(0);

    const Adicionar = () => {
        setValor(valor+1);
    }

    const Remover = () => {
        setValor(valor-1);
    }



    return (
        <div>
            <h1>Card</h1>
            <div className="card">
                <div className="card-header">
                    Meu primeiro Card
                </div>
                <div className="card-body">
                    <button type="button" 
                        className="btn btn-outline-success"
                        onClick={Adicionar}
                    >
                        Adicionar
                    </button>
                    <button type="button" 
                        className="btn btn-outline-danger"
                        onClick={Remover}
                    >
                        Remover
                    </button>
                    <p>{valor}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;