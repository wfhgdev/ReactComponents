import './Testimony.css';

const images = import.meta.glob('../../assets/img/*.png', 
    { eager: true, import: 'default' });

function Testimony(props) {
  return (

    <div className='containerTestimony'>
      <img 
        className='imageTestimony'

        src={images[`../../assets/img/${props.image}.png`]}
        alt={`Picture of ${props.name}`} 
      />

      <div className='containerTextTestimony'>
        <p className='nameTestimony'>
            {props.name}
        </p>
        <p className='positionTestimony'>
            {props.position}
        </p>
        <p className='textTestimony'>
            {props.testimonyText}
		</p>
      </div>
    </div>
    );
}

export default Testimony;