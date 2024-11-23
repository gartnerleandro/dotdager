import { Axe, Linkedin, Youtube, Github, TreePalm, Instagram } from 'lucide-react';

import Typewriter from '@/app/_components/Typewriter/Typewriter';
import ScrollAnimation from '@/app/_components/ScrollAnimation/ScrollAnimation';
import ThemeSwitcher from '@/app/_components/ThemeSwitcher/ThemeSwitcher';
import Navbar from '@/app/_components/Navbar/Navbar';

import "./page.css";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <ThemeSwitcher />
        <Navbar />
        <section className="hero">
          <div className="presentation">
            <div className="profile-wrapper" data-glow>
              <span className="profile"></span>
            </div>
            
            <h2>Hola, soy Dot Dager</h2>
            <Typewriter
              strings={["Full-Stack/Lead Developer.", "Creador de contenido.", "Amante de la filosofía.", "Guitarrista.", "Catador de pepinos.", "Campeón del lumberjack."]}
              autoStart={true}
              loop={true}
            />
            <a data-glow title="lumberjack" href="https://www.tbot.xyz/lumber/" target="_blank" className="fake-cv">
              <Axe />
              Consultar CV
            </a>
          </div>
          
          <ScrollAnimation />
          
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
