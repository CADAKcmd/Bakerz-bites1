import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Message submitted successfully!');
  };

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-96 bg-cover bg-center bg-yellow-50 flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold z-10">Contact Us</h1>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="border p-3 rounded w-full" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="border p-3 rounded w-full" required />
          </div>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="border p-3 rounded w-full" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write message" rows="6" className="border p-3 rounded w-full" required></textarea>
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded">Submit now</button>
        </form>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="italic text-gray-600">Do you have anything in your mind to let us know? Kindly don't delay to connect to us by means of our contact form.</p>
          <div>
            <p className="font-semibold">Address :</p>
            <p>54B, Tailstoi Town 5238<br />La city, IA 522364</p>
          </div>
          <div>
            <p className="font-semibold">Phone :</p>
            <p>01372.466.790</p>
          </div>
          <div>
            <p className="font-semibold">Email :</p>
            <p>info@cakebakery.com</p>
          </div>
          <div>
            <p className="font-semibold">Opening Hours :</p>
            <p>8:00 AM – 10:00 PM<br />Monday – Sunday</p>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0902254063874!2d-122.47825558468154!3d37.8023599797524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581946c0e2b83%3A0x6f5d13c8b0e1cfb2!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1648548123456!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}


export default ContactUs;