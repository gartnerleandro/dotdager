import { BookMarked } from "lucide-react";

import "./ProjectCard.css";

interface Language {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  languages: Language[];
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages, url }) => {
  return (
    <article className="project-card" data-glow>
      <a href={url} title={title} target="_blank">
        <div className="card-title">
          <BookMarked />
          <h4>{title}</h4>
        </div>
        <p className="card-description">{description}</p>
        <p className="card-languages">
          {languages.map((lang) => (
            <span key={lang.name} className="language">
              <span style={{ backgroundColor: lang.color || "transparent" }} className="dot"></span>
              {lang.name}
            </span>
          ))}
        </p>
      </a>
    </article>
  );
};

export default ProjectCard;
