import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
function GoogleMap() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4104426888416!2d3.624233574992476!3d6.469578793522149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf979fee11457%3A0xa5d6185fb1770461!2sAptech%20Computer%20Education%20Ajah%20Centre!5e0!3m2!1sen!2sng!4v1713139513988!5m2!1sen!2sng";

  return (
    <iframe
      src={mapUrl}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function ContactPage() {
  return (
    <div className="contactPage">
      <GoogleMap className="googleMap"/>

      <section>
        <h1>Contact Us</h1>
        <div>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10" placeholder="Message"></textarea>
            <button className="Btn">Submit</button>
          </form>
        </div>
      </section>
      <div className="reachOut">
        <h1>Reach Out To Us</h1>
        <div className="socialMedia">
          <div>
            <FaFacebook className="reachIcon" />
            <p>Facebook</p>
          </div>
          <div>
            <FaInstagram className="reachIcon" />
            <p>Instagram</p>
          </div>
          <div>
            <TiSocialTwitter className="reachIcon" />
            <p>X</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
