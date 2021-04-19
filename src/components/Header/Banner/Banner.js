import React from 'react';
import banner from '../../../image/banner-bg.png'
import man from '../../../image/bannerman.png'
import './Banner.css'

const Banner = () => {
    const style = {
        backgroundImage: ` url(${banner})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingBottom:'100px'
    }

    return (
        <section style={style} className="bannerMain pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <img className="img-fluid bannarImage" src={man} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-6 d-flex justify-content-center align-items-center ">
                        <div className="bannerCaption">
                            <h1 className="text-white Caption">Stay Clean <br/>Stay Healthy</h1>
                            <p className="captionDetails">Is your house a mess? Do you find that you never have enough time to wash the dishes, make the beds, vacuum, and have a few minutes of free time for yourself? Are there things that need cleaning that you keep putting off? Do you settle for superficial cleaning when a room really requires a deep clean? If this sounds like you and you’re thinking</p>
                            <button className="main-btn main-btn-2 ml-4"> Learn More </button>
                            <button className="main-btn"> Quick Cleaning </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;