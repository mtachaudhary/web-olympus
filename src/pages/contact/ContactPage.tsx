import { useState } from 'react';
import './contact.style.scss';
import contactImg from '../../images/contact-img.svg';
import PageHeading from '../../components/page-heading/PageHeading';
import Header from '../../components/header/Header';

interface IContact {
  name: string,
  email: string,
  subject: string,
  message: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<IContact>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Handle form submission here
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="contactPage" onSubmit={handleSubmit}>
      <Header />

      <div className='container'>
        <div className='formWrapper'>
          <div className='formInner'>

            <PageHeading 
              title="Contact Us" 
              description="Book a call or write us to discover our different options. Whether it's membership for recurring missions or more 'classic' quotes for big projects, we have the right package for you."
            />

            <form className='contactForm'>
              <div className='formField'>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Input your full name in here'
                  value={formData?.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='formField'>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder='Input your Email in here'
                  value={formData?.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className='formField'>
                <label>Subject</label>
                <select 
                  name="subject" 
                  value={formData?.subject}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Questions</option>
                  <option value="Support">Support</option>
                  <option value="Feedback" >Feedback</option>
                  <option value="General" >General</option>
                </select>
              </div>
              <div className='formField'>
                <label>Messages</label>
                <textarea 
                  name="message" 
                  placeholder='Input your Messages in here'
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
            
          </div>

          <div className='formImage'>
            <img src={contactImg} alt="form image" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ContactPage;