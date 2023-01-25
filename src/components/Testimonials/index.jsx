import './testimonials.css'
import TestimonialCard from '../mini-parts/testimonial-card'

function Testimonials(){
    return (
      <section id="testimonials">
        <h5>testimonial</h5>
        <h2>See what they're saying about us</h2>
        <div className="container flex">
          <div className="portion">
            <TestimonialCard/>
            <TestimonialCard/>
          </div>
          <div className="portion">
            <TestimonialCard/>
            <TestimonialCard/>
          </div>
          <div className="portion">
            <TestimonialCard/>
            <TestimonialCard/>
          </div>
        </div>
      </section>
    );
}

export default Testimonials;