export default function Perfil (props) {

    return (
        <div className="Perfis">
            <img className="imgsugestao" src={props.imgsugestao} /> <span className="arroba">{props.arroba}</span> <span className="seguir">seguir</span>
        </div>

    )
}