import React from 'react'

const HomeScreen = () => {
  return (
    <div className='container'>
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>

      <header className="header">
        <img src="img/logo.png" alt="" className="header__logo" />
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">As seen on</div>
        <div className="header__seenon-logos">
          <img src="img/logo-bbc.png" alt="" className="" />
          <img src="img/logo-forbes.png" alt="" className="" />
          <img src="img/logo-techcrunch.png" alt="" className="" />
          <img src="img/logo-bi.png" alt="" className="" />
        </div>
      </header>

      <div className="realtors">
        <h3 className="heading-3">Top 3 Realtors</h3>
        <div className="realtors__list">
          <img src="img/passport.jpg" alt="" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Okafor David</h4>
            <p className="realtors__sold">458 houses sold</p>
          </div>
          
          <img src="img/realtor-3.jpeg" alt="" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Honourable Ibrahim</h4>
            <p className="realtors__sold">320 houses sold</p>
          </div>
          
          <img src="img/realtor-2.jpeg" alt="" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Brown Kasey</h4>
            <p className="realtors__sold">232 houses sold</p>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <svg className="feature__icon"><use xlinkHref="img/sprite.svg#icon-global"></use></svg>
          <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio 
            sapiente sed numquam, officiis molestias doloremque esse veritatis consectetur amet, quae similique sint 
            quo quia aspernatur dolore illum? Illo, alias!
          </p>
        </div>
        
        <div className="feature">
          <svg className="feature__icon"><use xlinkHref="img/sprite.svg#icon-trophy"></use></svg>
          <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae, perferendis enim aperiam necessitatibus 
            repudiandae reiciendis saepe minima facere incidunt eveniet quia quaerat! Nisi at reiciendis quis labore quidem 
            reprehenderit.
          </p>
        </div>
        
        <div className="feature">
          <svg className="feature__icon"><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
          <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
          <p className="feature__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum earum vero quo assumenda consequuntur, 
            aliquid necessitatibus perspiciatis ab quaerat dignissimos vel, laboriosam debitis inventore eaque! Explicabo 
            libero laudantium provident nulla.
          </p>
        </div>
        
        <div className="feature">
          <svg className="feature__icon"><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sapiente nam deserunt modi distinctio provident amet. 
            Nemo incidunt ut ad numquam quisquam consequatur similique? Blanditiis itaque minima alias ducimus reprehenderit.
          </p>
        </div>
        
        <div className="feature">
          <svg className="feature__icon"><use xlinkHref="img/sprite.svg#icon-presentation"></use></svg>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nostrum alias quam, omnis sequi, vitae aspernatur 
            expedita velit reiciendis necessitatibus tenetur laborum suscipit ex. Maxime est veniam quibusdam nobis ex!
          </p>
        </div>
        
        <div className="feature">
          <svg className="feature__icon"><use xlinkHref="img/sprite.svg#icon-lock"></use></svg>
          <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio 
            sapiente sed numquam, officiis molestias doloremque esse veritatis consectetur amet, quae similique sint 
            quo quia aspernatur dolore illum? Illo, alias!
          </p>
        </div>
      </section>

      <div className="story__pictures">
        <img src="img/story-1.jpeg" alt="" className="story__img--1" />
        <img src="img/story-2.jpeg" alt="" className="story__img--2" />
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-2">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-3">&ldquo;The best decision of our lives &rdquo;</h2>
        <p className="story__text mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius tempore ullam laborum blanditiis minus alias 
          rerum, eaque architecto voluptate tempora vel, porro error ratione illo enim ad? Architecto, omnis ratione.
        </p>
        <button className="btn">Find your home</button>
      </div>

      <section className="homes">
        <div className="home">
          <img src="img/house-1.jpeg" alt="" className='home__img' />
          <svg className="home__like"><use xlinkHref="img/sprite.svg#icon-heart-full"></use></svg>
          <h5 className="home__name">Beautiful Family House</h5>
          <div className="home__location">
            <svg><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
            <p>Lekki</p>
          </div>
          <div className="home__rooms">
            <svg><use xlinkHref="img/sprite.svg#icon-profile-male"></use></svg>
            <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg><use xlinkHref="img/sprite.svg#icon-expand"></use></svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
            <p>&#8358;50.5m</p>
          </div>
          <button className="btn home__btn">Contact Realtor</button>
        </div>

        <div className="home">
          <img src="img/house-2.jpeg" alt="" className='home__img' />
          <svg className="home__like"><use xlinkHref="img/sprite.svg#icon-heart-full"></use></svg>
          <h5 className="home__name">Modern Glass Villa</h5>
          <div className="home__location">
            <svg><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
            <p>Ikoyi</p>
          </div>
          <div className="home__rooms">
            <svg><use xlinkHref="img/sprite.svg#icon-profile-male"></use></svg>
            <p>6 rooms</p>
          </div>
          <div className="home__area">
            <svg><use xlinkHref="img/sprite.svg#icon-expand"></use></svg>
            <p>450 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
            <p>&#8358;73.8m</p>
          </div>
          <button className="btn home__btn">Contact Realtor</button>
        </div>

        <div className="home">
          <img src="img/house-3.jpeg" alt="" className='home__img' />
          <svg className="home__like"><use xlinkHref="img/sprite.svg#icon-heart-full"></use></svg>
          <h5 className="home__name">Cozy Country House</h5>
          <div className="home__location">
            <svg><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
            <p>Victoria Island</p>
          </div>
          <div className="home__rooms">
            <svg><use xlinkHref="img/sprite.svg#icon-profile-male"></use></svg>
            <p>4 rooms</p>
          </div>
          <div className="home__area">
            <svg><use xlinkHref="img/sprite.svg#icon-expand"></use></svg>
            <p>250 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
            <p>&#8358;48.4m</p>
          </div>
          <button className="btn home__btn">Contact Realtor</button>
        </div>

        <div className="home">
          <img src="img/house-4.jpeg" alt="" className='home__img' />
          <svg className="home__like"><use xlinkHref="img/sprite.svg#icon-heart-full"></use></svg>
          <h5 className="home__name">Large Rustica Villa</h5>
          <div className="home__location">
            <svg><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
            <p>Onireke Estate</p>
          </div>
          <div className="home__rooms">
            <svg><use xlinkHref="img/sprite.svg#icon-profile-male"></use></svg>
            <p>6 rooms</p>
          </div>
          <div className="home__area">
            <svg><use xlinkHref="img/sprite.svg#icon-expand"></use></svg>
            <p>560 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
            <p>&#8358;78.5m</p>
          </div>
          <button className="btn home__btn">Contact Realtor</button>
        </div>

        <div className="home">
          <img src="img/house-5.jpeg" alt="" className='home__img' />
          <svg className="home__like"><use xlinkHref="img/sprite.svg#icon-heart-full"></use></svg>
          <h5 className="home__name">Majestic Palace House</h5>
          <div className="home__location">
            <svg><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
            <p>Victoria Island</p>
          </div>
          <div className="home__rooms">
            <svg><use xlinkHref="img/sprite.svg#icon-profile-male"></use></svg>
            <p>18 rooms</p>
          </div>
          <div className="home__area">
            <svg><use xlinkHref="img/sprite.svg#icon-expand"></use></svg>
            <p>4359 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
            <p>&#8358;300.5m</p>
          </div>
          <button className="btn home__btn">Contact Realtor</button>
        </div>

        <div className="home">
          <img src="img/house-6.jpeg" alt="" className='home__img' />
          <svg className="home__like"><use xlinkHref="img/sprite.svg#icon-heart-full"></use></svg>
          <h5 className="home__name">Modern Family Apartment</h5>
          <div className="home__location">
            <svg><use xlinkHref="img/sprite.svg#icon-map-pin"></use></svg>
            <p>Ajah</p>
          </div>
          <div className="home__rooms">
            <svg><use xlinkHref="img/sprite.svg#icon-profile-male"></use></svg>
            <p>3 rooms</p>
          </div>
          <div className="home__area">
            <svg><use xlinkHref="img/sprite.svg#icon-expand"></use></svg>
            <p>120 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            <svg><use xlinkHref="img/sprite.svg#icon-key"></use></svg>
            <p>&#8358;25.3m</p>
          </div>
          <button className="btn home__btn">Contact Realtor</button>
        </div>

      </section>

      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src="img/gal-1.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--2">
          <img src="img/gal-2.jpeg" alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--3">
          <img src="img/gal-3.jpeg" alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--4">
          <img src="img/gal-4.jpeg" alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--5">
          <img src="img/gal-5.jpeg" alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--6">
          <img src="img/gal-6.jpeg" alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__item gallery__item--7">
          <img src="img/gal-7.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--8">
          <img src="img/gal-8.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--9">
          <img src="img/gal-9.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--10">
          <img src="img/gal-10.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--11">
          <img src="img/gal-11.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--12">
          <img src="img/gal-12.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--13">
          <img src="img/gal-13.jpeg" alt="" className="gallery__img" />
        </figure>
        
        <figure className="gallery__item gallery__item--14">
          <img src="img/gal-14.jpeg" alt="" className="gallery__img" />
        </figure>

      </section>

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item"><a href="#" className='nav__link' >Find your dream home</a></li>
          <li className="nav__item"><a href="#" className='nav__link' >Request Proposal</a></li>
          <li className="nav__item"><a href="#" className='nav__link' >Download home planner</a></li>
          <li className="nav__item"><a href="#" className='nav__link' >Contact us</a></li>
          <li className="nav__item"><a href="#" className='nav__link' >Submit your property</a></li>
          <li className="nav__item"><a href="#" className='nav__link' >Come work with us</a></li>
        </ul>
        <p className="copyright">
          &copy; Copyright 2022 by Okafor David
        </p>
      </footer>
    </div>
  )
}

export default HomeScreen