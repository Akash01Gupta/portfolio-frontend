import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const skills = [
  "React.js", "Node.js", "Express", "MongoDB", "Tailwind", "JWT", "Framer Motion"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <SectionTitle title="Skills & Technologies" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <Card key={skill}>
            <p className="text-center text-lg font-medium text-cyan-300">{skill}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
