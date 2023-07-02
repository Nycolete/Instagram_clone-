import './Stories.css'
import Story from './Comps/Storys/Story'
import imgStory from './imagens/autor5.jpg';
import imgStory2 from './imagens/autor2.jpg';
import imgStory3 from './imagens/autor3.jpg';
import imgStory4 from './imagens/autor4.jpg';

export default function Stories(props) {
 
    return (
      <div className='Stories'>
        <Story imgStory={imgStory} nome='Mancha' />
        <Story imgStory={imgStory2} nome='Spider_Gwen' />
        <Story imgStory={imgStory4} nome='P.Parker' />
        <Story imgStory={imgStory3} nome='Parker' />
      </div>
    )
  }

  