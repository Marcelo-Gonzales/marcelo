import { useState } from 'react';
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const addBracket = (text) => {
      if (selectedPost == text) return `[${text}]`;
      else return `${text}`;
  };

  const [selectedPost, setHovered] = useState(null);

  return (
    <div className="contact">
      <div className="contact-row">
        <span className="icon"><Mail size={20} /></span>
        <a className="bracket-link" href="mailto:me@marcelogonzales.com"><span>me@marcelogonzales.com</span></a>
      </div>

      <div className="contact-row">
        <span className="icon"><Github size={20} /></span>
        <a className="bracket-link" href="https://github.com/Marcelo-Gonzales" target="_blank"><span>github.com/marcelo-gonzales</span></a>
      </div>

      <div className="contact-row">
        <span className="icon"><Linkedin size={20} /></span>
        <a className="bracket-link" href="https://www.linkedin.com/in/marcelofgonzales/" target="_blank"><span>linkedin.com/in/marcelofgonzales/</span></a>
      </div>
    </div>
  );
}

export default Contact;