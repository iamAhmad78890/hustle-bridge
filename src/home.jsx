import React from 'react'
import "./home.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            {/* navbar */}
            <div class="container-fluid header_section">
                <div class="container">
                    <div class="navbar">
                        <div>
                            <img src="./images/logo-icon.png" alt="" />
                        </div>
                        <div class="nav-links">
                            <a class="active home" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
                            <a href="#"><i class="fa fa-fw fa-search"></i> Post hustle</a>
                            <a href="#"><i class="fa fa-fw fa-envelope"></i> find hustle</a>
                            <a href="#"><i class="fa fa-fw fa-user"></i> join service providers</a>
                        </div>
                        <div className=''>
                            <button className='nav-btns'>
                                Login
                            </button>
                            <button className='nav-btns'>
                                Sign in
                            </button>
                            
                        </div>

                    </div>
                </div>
            </div>
            {/* Hero section */}

            <div className='container'>
                <div className='row my-5'>
                    <div className='col-4 hero_section_heading'>
                        <h1 className='mt-5'>Find The Best Services</h1>
                    </div>
                    <div className='col-8'>
                        <img src="./images/hero-img.png" className='img-fluid' alt="" />
                    </div>

                </div>
                <div className='container '>
                    <div className='searchbar'>
                        <div className='row '>
                            <div className='col-5'>
                                <div className='row search_icon_content'>
                                    <div className='col-6'>
                                        <div>
                                            <i class="fa fa-fw fa-search"></i>
                                        </div>
                                    </div>

                                    <div className='col-6'>
                                        <div>
                                            <span> Find  Services</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-5'>
                                <div className='row search_icon_content'>
                                    <div className='col-6'>
                                        <div className='location_icon'>
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>

                                    <div className='col-6'>
                                        <div className='location_heading'>

                                            <span> Enter Location</span>


                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-2 search_button'>
                                <button>Search</button>

                            </div>

                        </div>


                    </div>

                </div>

            </div>


            {/* carousel */}
            <div className='Container-fluid my-5'>
                <h1 className='text-center carousel_heading'>
                    Browse Categories

                </h1>
                <Carousel responsive={responsive}>
                    <div className='card cake'>
                        <img className='product--image' src="./images/massage.png" alt="product " />
                        <div className='card-para'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    <div className='card '>
                        <img className='product--image' src="./images/massage.png" alt="product " />
                        <div className='card-para'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='product--image' src="./images/massage.png" alt="product " />
                        <div className='card-para'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='product--image' src="./images/massage.png" alt="product " />
                        <div className='card-para'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='product--image' src="./images/massage.png" alt="product " />
                        <div className='card-para'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='product--image' src="./images/massage.png" alt="product " />
                        <div className='card-para'>
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </Carousel>;
            </div>

            {/* best service provider */}
            <div className='container best_service_provider_section'>
                <h1 className='text-center my-5'>Best Service Provider</h1>
                <div className='container deans_food'>
                    <div className='row py-5 text-center'>
                        <div className='col-3 deans_border'>
                            <div className='deans_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div>
                                <h4 className='my-2'> Deans Food</h4>
                                <span className='my-2'>4.7 (22)Reviews</span>
                                <div className='my-2 icons_stars'>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <p>
                                    The green tick shows that you have studied the said Lesson/Topic.
                                </p>

                            </div>
                        </div>
                        <div className='col-3 deans_border'>
                            <div className='deans_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div>
                                <h4 className='my-2'> Deans Food</h4>
                                <span className='my-2'>4.7 (22)Reviews</span>
                                <div className='my-2 icons_stars'>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <p>
                                    The green tick shows that you have studied the said Lesson/Topic.
                                </p>

                            </div>
                        </div>
                        <div className='col-3 deans_border'>
                            <div className='deans_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div>
                                <h4 className='my-2'> Deans Food</h4>
                                <span className='my-2'>4.7 (22)Reviews</span>
                                <div className='my-2 icons_stars'>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <p>
                                    The green tick shows that you have studied the said Lesson/Topic.
                                </p>

                            </div>
                        </div>
                        <div className='col-3 deans_border'>
                            <div className='deans_img'>
                                <img src="./images/face.jpeg" alt="" />
                            </div>
                            <div>
                                <h4 className='my-2'> Deans Food</h4>
                                <span className='my-2'>4.7 (22)Reviews</span>
                                <div className='my-2 icons_stars'>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <p>
                                    The green tick shows that you have studied the said Lesson/Topic.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* service provider section */}
            <div className='container my-5'>
                <div className='service_provider_heading'>
                    <h2>It has never been easier to find <br /> service providers</h2>
                </div>
                <div className='row mt-5   '>
                    <div className='col-4'>
                        <img src="./images/img1.png" alt="" />
                    </div>
                    <div className='col-8 tell_us'>
                        <h1>
                            Tell us everything

                        </h1>
                        <p>Describe your needs precisely in a few clicks thanks to our questionaire </p>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4'>
                        <img src="./images/image.png" alt="" />
                    </div>
                    <div className='col-4 compare_offers'>
                        <h1>
                            Compare offers

                        </h1>
                        <p>Describe your needs precisely in a few clicks thanks to our questionaire </p>
                    </div>

                </div>
                <div className='row my-5'>
                    <div className='col-4'>
                        <img src="./images/img1.png" alt="" />
                    </div>
                    <div className='col-8 hire_service'>
                        <h1>
                            Hire a service provider

                        </h1>
                        <p>Hire the provider who convinced you directly or use our guaranteed brokerage service</p>
                    </div>

                </div>

            </div>
            {/* laura d section */}
            <div className='container text-center laura-section'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='laura-child-1'>
                            <div className='container'>
                                <div className='row laura_section' style={{ justifyContent: "space-around" }}>
                                    <h4>BUYER</h4>
                                    <div className='col-lg-4 hex'>

                                        <img src="./images/face.jpeg" className='img-fluid' alt="" />
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='laura_details'>
                                            <h1 className='laura-head'>Laura D</h1>
                                            <p className='laura-para'>since 2020</p>
                                        </div>

                                    </div>
                                    <div className='col-lg-4'>
                                        <p className='laura-para-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, architecto. Numquam quibusdam debitis sunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='laura-child-2'>
                            <div className='container'>
                                <div className='row laura_section' style={{ justifyContent: "space-around" }}>
                                    <h4>BUYER</h4>
                                    <div className='col-lg-4 hex'>
                                        <img src="./images/face.jpeg" className='img-fluid' alt="" />
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='laura_details'>
                                            <h1 className='laura-head'>Laura D</h1>
                                            <p className='laura-para'>since 2020</p>
                                        </div>

                                    </div>
                                    <div className='col-lg-4'>
                                        <p className='laura-para-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, architecto. Numquam quibusdam debitis sunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='laura-child-3'>
                            <div className='container'>
                                <div className='row laura_section' style={{ justifyContent: "space-around" }}>
                                    <h4>BUYER</h4>
                                    <div className='col-lg-4 hex'>
                                    <img src="./images/face.jpeg" className='img-fluid' alt="" />
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='laura_details'>
                                            <h1 className='laura-head'>Laura D</h1>
                                            <p className='laura-para'>since 2020</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <p className='laura-para-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, architecto. Numquam quibusdam debitis sunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h1 className='customer-head'>Over <b>100,000</b> customers and service  providers <br/> use StarOfService to <br/> HustleBrodge.</h1>
                    </div>
                </div>
            </div>
            {/* Why Choose us */}
            <div className='container my-5'>
                <h1 className='my-5 choose_us_heading'>Why Choose Us?</h1>
                <div className='row'>
                    <div className='col-6'>
                   <div className='row'>
                    <div className='col-6'>
                    <img src="./images/img12.png" alt="" />
                    </div>
                    <div className='col-6 my-5 best_service_content'>
                    <h1> Best Service</h1>
                     <p>We Provide the best Service</p>
                    </div>
                   
                    
                   </div>
                   <div className='row'>
                    <div className='col-6 mt-3  '>
                    <img src="./images/img3.png" alt="" />
                    </div>
                    <div className='col-6 my-5 best_service_content'>
                    <h1> Verified Expert</h1>
                     <p>We Provide the best Service</p>
                    </div>
                   
                    
                   </div>
                   <div className='row'>
                    <div className='col-6'>
                    <img src="./images/img13.png" alt="" />
                    </div>
                    <div className='col-6 my-5 best_service_content'>
                    <h1> Service Variety</h1>
                     <p>We Provide the best Service</p>
                    </div>
                   
                    
                   </div>
                    </div>
                    <div className='col-6'>
                     <div className='top_quality_section'>
                      <div className='top_quality_content'> 
                        <img src="./images/Vector.svg" alt="" />
                        <div>
                            <h5>100 % Quality</h5>
                            <p>We take right steps so you dont have to worry    </p>
                        </div>
                      </div>
                     </div>
                    </div>

                </div>

            </div>

            {/* available on section */}
            <div className='container Hustle text-center'>
                <div class="row align-items-center">
                    <div class="col-lg-4 text-start">
                        <h1 className='hustle-heading '>Are you a <br /> service <br /> provider ? </h1>
                        <p>Register for free to find new customers!</p>
                    </div>
                    <div class="col-lg-4">
                        <img src="./images/img.png" className='img-fluid' alt="" />
                        <button className='hustle-btn'>Join The Hustle</button>
                    </div>
                    <div class="col-lg-4">
                        <h1 className='hustle-heading-2'>Availabe On</h1>
                        <div className='play-box'>
                            <img src="./images/google.png" alt="" className='img-fluid' />
                        </div>
                        <div className='app-box'>
                            <img src="./images/appstore.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div class="container-fluid footer_section">
                <div className='footer py-4'>
                    <div>
                        <img src="./images/logo-icon.png" alt="" />
                    </div>
                    <div className='footer_links'>
                        <a href=""> Terms and Condition </a>
                        <a href=""> Privacy Policy </a>
                        <a href=""> Content Guidline </a>
                    </div>
                    <div className='mt-3'>
                        <img src="./images/Vector.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home