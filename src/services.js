import react from "react";
import ServicesCardComp from "./servicescardcomp";
import "./services.css";
import ReverseServices from "./ReverseServices";
import ReviewCard from "./reviewcard";
//import ReverseCardComp from "./reversecardcomp";


const Services = () => {
  return (
    // <div class="belowheader">
    <div class="services">
    <div class="serviceone">
      <div class="leftpart">
        <div class="yellowbox">
          <h4 class="insidebutton">Built Dream And Securing Future</h4>
        </div>
        <h4 class="boldmaroon">
          All-inclusive Real Estate Solutions for Buyers & Investors
        </h4>
        <h4 class="basiccontent">
          Helping you find the perfect property or make smart investment decisions with expert guidance.
        </h4>
        < div class="buttons">
        <button class="marooncontactus">Contact Us</button>
        <button class="outlineviewservices">View Sevices</button>
        </div>
      </div>
      <div >
        <img src="/services/home.png" alt="home"></img>
        </div>  
     </div>
     <div>
     <div class="servicetwo">
      <div class="why">
        <img src="/whyaarvasa.png" alt="why aasarva"></img>
      </div>
      <div class="textright">
        <h5>Extensice Property Database</h5>
        <h5>Experineced consultants</h5>
        <h5> Personalized investmanet startegies</h5>
        <h5> Testimonials or client success stories</h5>
      </div>
     </div>
     </div>
     <div class="servicesthree">
        <h1 class="allservices">All Services:</h1>
        <h4 class="details">Aarvasa Simpliflies Real Estate with Seamless Transactions, Investments, and Property Monetization</h4>
     </div>
     <div class="cards">
      <ServicesCardComp
      heading="Comprehensive Consultancy Services :"
      text="Comprehensive Consultancy Services refers to a broad range of advisory and support services provided to businesses, organizations, or individuals. These services typically cover multiple ..."
      imageSrc="/Services/consultancy.jpeg"
      />
      <ReverseServices
      heading="AR/VR Property Tours :"
      text="AR/VR Property Tours use Augmented Reality and Virtual Reality technologies to create immersive, interactive experiences for viewing properties. These tools are becoming increasingly popular in real estate as they allow ..."
      imageSrc="/Services/arvr.png"
      />
      <ServicesCardComp
      heading="Flexible Payment Models :"
      text="Flexible Payment Models refer to various payment structures that offer clients or customers the ability to pay for goods or services in ways that suit their financial situation or preferences. These models provide greater..."
      imageSrc="/Services/paymentmodel.png"
      />
      <ReverseServices
      heading="AI Powered Personalization :"
      text="AI-Powered Personalization refers to the use of artificial intelligence (AI) to tailor products, services, content, or experiences to individual users based on their preferences, behaviors, and interactions. AI analyzes large ..."
      imageSrc="/Services/aipowered.png"
      />
      <ServicesCardComp
      heading="Blockchain-Backed Transactions :"
      text="Blockchain-Backed Transactions refer to transactions that are recorded, verified, and secured using blockchain technology. Blockchain is a decentralized, distributed ledger system that..."
      imageSrc="/Services/blockchain.png"
      />
      <ReverseServices
      heading="Monetization of Existing Properties :"
      text="Monetization of Existing Properties refers to the process of generating income or financial value from assets or real estate that are already owned, rather than developing new ones. "
      imageSrc="/Services/monetization.png"
      />
     </div>
     <h4 class="Whatclients">What Our Clients Say</h4>
     <div class="reviewcards">
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     </div>
    <div class="bookdemo">
      <h3 class="textt">Bring all Your<br></br>
     legal , Technical and Other Question Here! </h3>
      <button class="bookdemobutton">
        <h6 class="buttoncontent">BOOK A DEMO</h6>
      </button>
    </div>
    <h4 class="Whatclients">Contact Us:</h4>
    <section className="consultation">
  <div className="content">
    <div className="image">
      <img src="/Services/scheduleconsulatance.png" alt="House Image" />
    </div>
    <div className="form-container">
      <form>
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" placeholder="Enter your name" required />
        
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label htmlFor="date">DATE</label>
        <input type="date" id="date" required />
        
        <button type="submit">Scheduling A Consultation</button>
      </form>
    </div>
  </div>
</section>
{/* Footer */}
<footer className="footer">
        <div className="footer-section">
          <h3>
            <span className="time">Time</span>
            <span className="slotter">Slotter</span>
          </h3>
          <p>Revolutionize scheduling with TimeSlotter.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="underlined">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="underlined">Privacy & Terms</h3>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund and Cancellation Policy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="underlined">Contact Us</h3>
          <p>Technology Tower, VIT Vellore</p>
          <p>Room No. 004, Ground Floor</p>
          <p>Vellore, Tamil Nadu, 632014</p>
          <p>Email: timeslotter@outlook.com</p>
        </div>
      </footer>

     </div>
  );
};

export default Services;
