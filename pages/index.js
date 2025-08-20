import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState, useEffect }  from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
 const [formVisible, setFormVisible] = useState(false);

   

   useEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
  }, []);

  
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

const handleSubmit = (e) => {
  e.preventDefault();
  const subject = encodeURIComponent("New Lead from Virtual Tour");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
  );

  window.location.href = `mailto:kinjal@yopmail.com?subject=${subject}&body=${body}`;
};
  
  return (
     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
 
        
      <iframe
        src="https://tours.savitarrealty.in/embed/tour/573ad82f"
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        allow="vr;xr-spatial-tracking;gyroscope;accelerometer;magnetometer;"
        title="Sahjanand Marigold"
        style={{ display: "block", border: "none" }}
      ></iframe>

 
      <div className="w-full md:w-1/3 bg-white p-6 shadow-lg flex items-center">
          {<button
                onClick={() => setFormVisible(true)}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%", 
                  transform: "translateY(-50%)",
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 9999, // make sure it's above iframe
                }}
              >
                  Download Brochure
              </button>
          }
       {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-xl relative">
            {/* Close button */}
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>

            {submitted ? (
              <h2 className="text-xl font-bold text-green-600">
                ✅ Thank you! We’ll contact you soon.
              </h2>
            ) : (
              <form className="w-full" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">Book a Site Visit</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                  className="border w-full p-2 mb-3 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="border w-full p-2 mb-3 rounded"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  required
                  className="border w-full p-2 mb-3 rounded"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      </div>
         
    </div>


   
  )
}
