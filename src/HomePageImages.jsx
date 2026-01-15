
import Carousel from 'react-bootstrap/Carousel';
import Images from './Images';
function HomePageImages() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Images text="https://framerusercontent.com/images/lKw31CfUck3w5fhvw1YNBWxyRwo.png?width=2398&height=1350" />
        <Carousel.Caption>
          <h3 style={{color:"black", backdropFilter:"blur(10px)" }}> Hyderabad Campus</h3>
          <p style={{color:"black"}}>Under Graduated, Post Graduated, Doctroal Programs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Images text="https://media.collegedekho.com/media/img/institute/crawled_images/None/CHAITANYA_GEbWf6_1620782473.webp?width=1080" />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Warangal Campus</h3>
          <p style={{color:"black"}}>Under Graduated, Post Graduated, Doctroal Programs....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Images text="https://www.chaitanya.edu.in/wp-content/uploads/2024/04/Blue-and-Yellow-Gradient-Modern-Desktop-Wallpaper.jpg" />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Best Carrer for life</h3>
          <p style={{color:"black"}}>
            Join with us to build your career...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePageImages;
