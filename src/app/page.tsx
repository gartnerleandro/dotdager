import { Axe, Linkedin, Youtube, Github, TreePalm, Instagram } from 'lucide-react';

import "./page.css";

export default function Home() {
  return (
    <div className="page">
      <main className="main">

        <section className="hero">
          <div className="presentation">
            <div className="profile-wrapper" data-glow>
              <span className="profile"></span>
            </div>
            
            <h2>Hola, soy Dot Dager</h2>
            
            <a data-glow title="lumberjack" href="https://www.tbot.xyz/lumber/" target="_blank" className="fake-cv">
              <Axe />
              Consultar CV
            </a>
          </div>
          
          
          
        </section>

        <section id="projects">
          <h2>Proyectos</h2>

          <div className="projects-list">
            
          </div>

          <h3 className="technologies-title">Tecnologías utilizadas</h3>
          <ul className="technologies">
            <li data-glow>
              <img loading="lazy" src="/net.webp" width="128" height="128" alt=".net" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/aws.webp" width="128" height="128" alt="aws" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/java.webp" width="128" height="128" alt="java" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/mysql.webp" width="128" height="128" alt="mysql" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/swift.webp" width="128" height="128" alt="swift" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/winforms.webp" width="128" height="128" alt="winforms" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/xamarin.webp" width="128" height="128" alt="xamarin" />
            </li>
          </ul>
        </section>

        <section id="quotes">
          
        </section>

        <section id="about">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador de software con más de 19 años de experiencia en la creación de aplicaciones web y móviles. Esta es mi trayectoria profesional:
          </p>
          <br />
          
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <div>
            <img loading="lazy" src="/contacto.webp" width="300" height="400" alt="contactame" />
            
          </div>
        </section>
      </main>
      <footer>
        <p>Hecho con ❤️ para Dot Dager</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/mariano-luis-villa/" className="linkedin" title="linkedin" target="_blank"><Linkedin /></a>
          </li>
          <li>
            <a href="https://www.youtube.com/@DotDager" className="youtube" title="youtube" target="_blank"><Youtube /></a>
          </li>
          <li>
            <a href="https://github.com/MarianoVilla" className="github" title="github" target="_blank"><Github /></a>
          </li>
          <li>
            <a href="https://linktr.ee/DotDager" className="linktree" title="linktree" target="_blank"><TreePalm /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/dager.32" className="instagram" title="instagram" target="_blank"><Instagram /></a>
          </li>
        </ul>
        <p>© {new Date().getFullYear()} Dot Dager</p>
      </footer>
    </div>
  );
}
