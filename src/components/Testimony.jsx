import '../styles/Testimony.css';

const images = import.meta.glob('../assets/img/*.png', 
    { eager: true, import: 'default' });

function Testimony(props) {
  return (

    <div className='container-testimony'>
      <img 
        className='image-testimony'

        src={images[`../assets/img/${props.image}.png`]}
        alt={`Picture of ${props.name}`} 
      />

      <div className='container-text-testimony'>
        <p className='name-testimony'>
            {props.name}
        </p>
        <p className='position-testimony'>
            {props.position}
        </p>
        <p className='text-testimony'>
            {props.testimonyText}
		</p>
      </div>
    </div>
    );
}

export default Testimony;