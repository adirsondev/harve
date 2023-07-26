import Carousel from 'react-bootstrap/Carousel';

function ComponenteCarousel() {
  return (
    <Carousel data-bs-theme="">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wperp-com.s3.amazonaws.com/uploads/2021/12/WP-ERP-Promote-Your-WordPress-Plugins-and-Themes-To-the-Right-Audience.png"
          alt="First slide"
          height={600}
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wperp-com.s3.amazonaws.com/uploads/2018/12/Must-have-wordpress-plugins-for-a-business-website.png"
          alt="Second slide"
          height={600}
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i1.wp.com/cdn.wperp.com/uploads/2018/10/Productivity-Tools-And-Project-Collaboration-Plugins-For-WordPress.png?fit=1994%2C798&ssl=1"
          alt="Third slide"
          height={600}
        />
        <Carousel.Caption>
          <h5></h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ComponenteCarousel;