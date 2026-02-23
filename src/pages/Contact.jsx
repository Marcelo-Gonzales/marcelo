import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-row">
        <span className="icon"><Mail size={20} /></span>
        <span>marcelo.f.gonzales@mail.com</span>
      </div>

      <div className="contact-row">
        <span className="icon"><Github size={20} /></span>
        <span>github.com/marcelo-gonzales</span>
      </div>

      <div className="contact-row">
        <span className="icon"><Linkedin size={20} /></span>
        <span>linkedin.com/in/marcelofgonzales/</span>
      </div>
    </div>
  );
}

export default Contact;