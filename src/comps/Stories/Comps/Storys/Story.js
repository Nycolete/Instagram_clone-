function Story (props) {
    return (
        <div className='Stories'>
        <div className='Story'>
         <div className='dimgStory'> 
          <img className='imgStory' src={props.imgStory} />
          </div> 
          <span className='nomeStory'>{props.nome}</span>
        </div>
       </div>
    )

}

export default Story