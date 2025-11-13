import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

const experiences = [
  {
    title: "Frontend Developer",
    company: "XYZ Technologies",
    duration: "2023 - Present",
    desc: "Building responsive UIs and implementing modern React.js features.",
  },
  {
    title: "Backend Developer Intern",
    company: "ABC Solutions",
    duration: "2022 - 2023",
    desc: "Developed RESTful APIs with Node.js and MongoDB.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <SectionTitle title="Experience" />
      <div className="grid gap-8 mt-12 max-w-3xl mx-auto">
        {experiences.map((exp) => (
          <Card key={exp.title}>
            <h3 className="text-xl font-semibold text-cyan-300">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>
            <p className="mt-3 text-gray-300">{exp.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
