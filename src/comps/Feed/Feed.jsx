import './Feed.css';
import Post from './comps/Post';

import imgPost1 from './comps/imagens/Exemplo1.jpg';
import imgPost2 from './comps/imagens/Exemplo2.jpg';
import imgPost3 from './comps/imagens/Exemplo3.jpg';
import imgPost4 from './comps/imagens/Exemplo4.jpg'
import imgPost5 from './comps/imagens/Exemplo5.jpg'



import imgAutor from './comps/imagens/Autor.jpg'
import imgAutor1 from './comps/imagens/Autor1.jpg'
import imgAutor2 from './comps/imagens/Autor2.jpg'
import imgAutor3 from './comps/imagens/Autor3.jpg'
import imgAutor4 from './comps/imagens/Autor4.jpg'
import imgAutor5 from './comps/imagens/Autor5.jpg'
import imgAutor6 from './comps/imagens/Autor6.jpg'

import { AiFillHeart} from "react-icons/ai";
import {BiMessageRounded} from "react-icons/bi";
import {IoPaperPlaneOutline} from "react-icons/io";
import {TbSend}  from 'react-icons/tb';


export default function Feed (props) {
 
    return (
     <div className='Feed'>
        <Post nome='@Mulher_Aranha' imgAutor={imgAutor1} imgPost={imgPost1}  heart={<AiFillHeart/>} coment={<BiMessageRounded/>} compartir={ <TbSend/>} comentarios="A Mãe do Rolê!!!!!"/>
        <Post nome='@aranho' imgAutor={imgAutor2}  imgPost={imgPost2} heart={<AiFillHeart/>} coment={<BiMessageRounded/>} compartir={ <TbSend/>}/>
        <Post nome='@gattuno' imgAutor={imgAutor3}  imgPost={imgPost5} heart={<AiFillHeart/>} coment={<BiMessageRounded/>} compartir={ <TbSend/>}/>
        <Post nome='@hb40wn' imgAutor={imgAutor4}  imgPost={imgPost4}   heart={<AiFillHeart/>} coment={<BiMessageRounded/>} compartir={ <TbSend/>} />
        <Post nome='mayday' imgAutor={imgAutor6}  imgPost={imgPost3} heart={<AiFillHeart/>} coment={<BiMessageRounded/>} compartir={ <TbSend/>}/>  
          
     </div> 
    )
  }