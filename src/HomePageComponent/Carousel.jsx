import React from 'react'
import carouselimg1 from '../Images/Carouselimg1.jpg';
import carouselimg2 from '../Images/Carouselimg2.jpg';
import carouselimg3 from '../Images/Carouselimg3.jpg';
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouselimg1} class="d-block w-100"  height="350px"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouselimg2} class="d-block w-100"  height="350px" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carouselimg3} class="d-block w-100" height="350px" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
