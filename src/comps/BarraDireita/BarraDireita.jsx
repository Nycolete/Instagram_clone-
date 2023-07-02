import './BarraDireita.css';
import autor1 from '../Stories/imagens/autor1.webp'
import Perfil from './comps/Perfil';
import Sugestions from './comps/Sugestions';
import Autor from './comps/Autor';
import autor2 from '../Feed/comps/imagens/Autor.jpg'
import autor3 from '../Feed/comps/imagens/Autor5.jpg'
import autor4 from '../Feed/comps/imagens/Autor9.jpg';


export default function BarraDireita(props) {
 
    return (
      <div class="BarraDireita">
       
      <div> <Autor imgautor={autor1}/> </div>

      <div> <Sugestions/> </div>

      <div className='perfil'>
        <Perfil imgsugestao={autor2} arroba="@miguelito" seguir />
        <Perfil imgsugestao={autor4} arroba="@Pig" seguir />
        <Perfil imgsugestao={autor2} arroba="@o`hara" seguir />
        <Perfil imgsugestao={autor3} arroba="@spidercat" seguir />

      </div>
      
     </div>

    )
  } 