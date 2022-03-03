import { useState } from "react";
import Button from "../Button";

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
                    <Button
                        className="btn btn-outline-success"
                        onClick={Adicionar}
                    >
                        Adicionar
                    </Button>

                    <Button
                        className="btn btn-outline-danger"
                        onClick={Remover}
                    >
                        Remover
                    </Button>

                    <p>{valor}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;