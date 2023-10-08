import backgroundImg from '../../assets/F.jpg'
import backgroundImg2 from '../../assets/background2.png'
import backgroundImg3 from '../../assets/background3.png'

const Banner = () => {
    return (
        <div className="carousel w-full" data-aos="fade-up"  data-aos-duration="3000">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={backgroundImg} className="max-w-4xl mx-auto" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={backgroundImg2} className="max-w-4xl mx-auto" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={backgroundImg3} className="max-w-4xl mx-auto" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
    );
};

export default Banner;