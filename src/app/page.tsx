import { Axe, Linkedin, Youtube, Github, TreePalm, Instagram } from 'lucide-react';

import Typewriter from '@/components/Typewriter/Typewriter';
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Timeline from '@/components/Timeline/Timeline';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

import "./page.css";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <ThemeSwitcher />
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

        <section id="projects">
          <h2>Proyectos</h2>

          <div className="projects-list">
            <ProjectCard
              title="WorldHardestGame-vs-AI"
              description="The World's Hardest Game in Unity... and a genetic algorithm to beat it."
              languages={[{name: "ShaderLab", color: "#222c37"}]}
              url="https://github.com/MarianoVilla/WorldHardestGame-vs-AI"
            />
            <ProjectCard
              title="HTTP-Server"
              description="HTTP server from scratch, using C#!"
              languages={[{name: "C#", color: "#178600"}]}
              url="https://github.com/MarianoVilla/HTTP-Server"
            />
            <ProjectCard
              title="DNS-Server"
              description="DNS server from scratch, using C#!"
              languages={[{name: "C#", color: "#178600"}]}
              url="https://github.com/MarianoVilla/DNS-Server"
            />
            <ProjectCard
              title="AToZChallenge"
              description="Writing a four-component full-stack app using silly stacks."
              languages={[{name: "TypeScript", color: "#3178c6"}]}
              url="https://github.com/MarianoVilla/AToZChallenge"
            />
            <ProjectCard
              title="ChauMundo"
              description="Hello World, but it's unnecessarily complex!"
              languages={[{name: "C#", color: "#178600"}]}
              url="https://github.com/MarianoVilla/ChauMundo"
            />
            <ProjectCard
              title="Git-In-CSharp"
              description="A (bare-bones) implementation of Git, using C#!"
              languages={[{name: "C#", color: "#178600"}]}
              url="https://github.com/MarianoVilla/Git-In-CSharp"
            />
          </div>

          <h3 className="technologies-title">Tecnologías utilizadas</h3>
          <ul className="technologies">
            <li data-glow>
              <img loading="lazy" src="/net.png" width="128" height="128" alt=".net" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/aws.png" width="128" height="128" alt="aws" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/java.png" width="128" height="128" alt="java" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/mysql.png" width="128" height="128" alt="mysql" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/swift.png" width="128" height="128" alt="swift" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/winforms.png" width="128" height="128" alt="winforms" />
            </li>
            <li data-glow>
              <img loading="lazy" src="/xamarin.png" width="128" height="128" alt="xamarin" />
            </li>
          </ul>
        </section>

        <section id="about">
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador de software con más de 19 años de experiencia en la creación de aplicaciones web y móviles. Esta es mi trayectoria profesional:
          </p>
          <br />
          <Timeline />
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
        <p>© 2024 Dot Dager</p>
      </footer>
    </div>
  );
}
