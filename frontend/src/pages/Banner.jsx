// import { Link } from 'react-router-dom'
import imgUrl from '../assets/camera.png'
const Banner = () => {
  const banner_text1 = 'Wedding, Pre-Wedding Photographic Cinematic Video';



  return (
    <div className="banner">
      <div className="banner_left">
        <div>
          <h1>{banner_text1}</h1>
          {/* <Link to={'/shop'}><button>Book Now</button></Link> */}
        </div>

        <div className="img">
          <img src={imgUrl} alt="camera" />
        </div>
      </div>
    </div>
  )
}

export default Banner