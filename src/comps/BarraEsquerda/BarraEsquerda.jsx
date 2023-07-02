import './BarraEsquerda.css';
import Itemmenu from './Comps/Itemmenu/Itemmenu';
import logo from './imagens/Instagram_logo.svg.png'
import {GrHomeRounded} from "react-icons/gr";
import { AiOutlineSearch } from 'react-icons/ai';
import {AiOutlineCompass} from 'react-icons/ai';
import {CgClapperBoard}  from 'react-icons/cg';
import {FaRegHeart}  from 'react-icons/fa';
import {TbSquareRoundedPlus}  from 'react-icons/tb';
import {TbSend}  from 'react-icons/tb';
import imgStory from '../Stories/imagens/autor1.webp';
import Itemmenuimg from './Comps/Itemmenu/Itemmenuimg';
import {GoThreeBars}  from 'react-icons/go';




export default function BarraEsquerda (props) {
   return (
      <div className="BarraEsquerda">
      
          <div className="logoinstagram">

         <img className='logo' src={logo}/>

          </div>
   
          <div className="menu">

         <Itemmenu texto='Página Inicial' icone= {<GrHomeRounded/>}/>
         <Itemmenu texto='Pesquisa' icone={<AiOutlineSearch/>}/>
         <Itemmenu texto='Explorar' icone={<AiOutlineCompass/>}/>
         <Itemmenu texto='Reels' icone={<CgClapperBoard/>}/>
         <Itemmenu texto='Mensagens' icone={ <TbSend/>}/>
          <Itemmenu texto='Notificações' icone={<FaRegHeart/>}/>
         <Itemmenu texto='Criar' icone={<TbSquareRoundedPlus/>}/>
         <Itemmenuimg texto='Perfil' imagem={imgStory}/>
         <Itemmenu texto='Mais' icone={<GoThreeBars/>}/>
          

          </div>
     
      </div> 
    )
  }