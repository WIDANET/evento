import { Convidado } from "@/core";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadosProps {
    convidados: Convidado[];
}

export default function ListaConvidados(props: ListaConvidadosProps) {
    return (

        <ul className="flex flex-col gap-2">
            <div>
                {props.convidados.map((convidado) => (
                    <ConvidadoItem key={convidado.id} convidado={convidado} />
                ))}
            </div>
        </ul>

    )
}