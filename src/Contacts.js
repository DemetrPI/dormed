import Map from "./components/Navigation";
import ContactsForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Collapse from "./Collapse";

function Contacts() {
  return (
    <div>
      <div className="d-flex justify-content-center">
     <ContactsForm />
     </div>
      <h2 className="text-center">You can find us on Google Map</h2>
     <div className="d-flex justify-content-center">
      <Map />
      </div>
      <div className="mt-5">
      {/* <Collapse/> */}
      <Footer/>
      </div>
    </div>
  );
}

export default Contacts;
