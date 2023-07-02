import "./Post.css";




export default function Post(props) {
    return(
        <div className="Post">
         
          <div className="Cabecalho_Post">
            <div className="Autor"> <img className="Img-Autor" src={props.imgAutor} /></div>
            {props.nome}
            </div>
         
          <div className="Conteudo_Post"> <img src={props.imgPost} /> </div>
          <div className="Acoes_Post">{props.ações}</div>
          <div className="icones_post"> {props.heart} {props.coment}{props.compartir}</div>
          <div className="Comentarios_Post"> {props.comentarios}</div>
          
        </div>
    )
}