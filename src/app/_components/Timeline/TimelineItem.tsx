"use client";
import { BriefcaseBusiness, BookCheck } from 'lucide-react';

import "./Timeline.css";

interface TimelineItemProps {
    title: string;
    description: string;
    startDate: string;
    endDate?: string;
    type: string;
}

function getIcon(type: string) {
    switch (type) {
        case "work":
            return <BriefcaseBusiness />;
        case "education":
            return <BookCheck />;
        default:
            return <BriefcaseBusiness />;
    }
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    description,
    startDate,
    endDate,
    type,
}) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content" data-glow>
                <span className="tag">
                    {getIcon(type)}
                </span>
                <h4 className="timeline-title">{title}</h4>
                <p className="timeline-description">{description}</p>
                <time>{startDate} - {endDate || "actualidad"}</time>
            </div>
        </div>
    )
}

export default TimelineItem;