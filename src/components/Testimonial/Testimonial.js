import React, { useEffect, useState } from 'react';
import testimonial from '../../image/testimonial-2.jpg';
import tes1 from '../../image/feedback-1.png';
import './Testimonial.css';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';



const Testimonial = () => {

    const [review, setReview] = useState([])
    useEffect( () => {
        fetch('https://secure-scrubland-24094.herokuapp.com/addReview')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    const style = {
        backgroundImage: ` url(${testimonial})`,
       // height: '700px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginBottom:'100px'
    }


    return (
        <section style={style} className="pt-5 testBody">
            <div className="container">
                <p className="ptext">Some Feedback</p>
                <h1 className="testimonialHeading">Some Feedback from Client About <br/> Our Company</h1>
                <div className="row">

                    {
                        review.map(review => <TestimonialDetails review={review}></TestimonialDetails>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Testimonial;