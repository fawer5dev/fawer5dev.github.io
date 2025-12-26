import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function EducationSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="education"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            {t.sections.education}
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {t.education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`🎓 ${edu.degree}`}
              subtitle={`🏛️ ${edu.institution}`}
              date={`📅 ${edu.period}`}
              isLast={index === t.education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
