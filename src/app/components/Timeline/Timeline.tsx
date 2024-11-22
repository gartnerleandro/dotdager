import TimelineItem from "./TimelineItem";

enum TimelineItemType {
    WORK = "work",
    EDUCATION = "education"
}

export default function Timeline() {
    return (
        <div className="timeline">
            <TimelineItem
                title="Lead Developer"
                description="University of Nebraska-Lincoln"
                startDate="dic. 2020"
                endDate="actualidad"
                type={TimelineItemType.WORK}
            />
            <TimelineItem
                title="Sofware Developer"
                description="Grupo Alpha 2000 · Profesional independiente"
                startDate="dic. 2018"
                endDate="actualidad"
                type={TimelineItemType.WORK}
            />
            <TimelineItem
                title="Freelance Software Developer"
                description="Profesional independiente · Profesional independiente"
                startDate="mar. 2016"
                endDate="actualidad"
                type={TimelineItemType.WORK}
            />
            <TimelineItem
                title="Help Desk Technician"
                description="Atento · Jornada parcial"
                startDate="ago. 2017"
                endDate="dic. 2018"
                type={TimelineItemType.WORK}
            />
            <TimelineItem
                title="Instituto Raúl Scalabrini Ortiz"
                description="Systems Analyst, Análisis de sistemas informáticos/Analista"
                startDate="2018"
                endDate="2022"
                type={TimelineItemType.EDUCATION}
            />
            <TimelineItem
                title="Universidad de Buenos Aires"
                description="Bachelor's in Philosophy, Philosophy"
                startDate="2016"
                endDate="2024"
                type={TimelineItemType.EDUCATION}
            />
            <TimelineItem
                title="C.F.P. N 10, Raúl Scalabrini Ortiz."
                description="PC and Networking Technician, Information technology/Networking"
                startDate="2016"
                endDate="2017"
                type={TimelineItemType.EDUCATION}
            />
        </div>
    )
}