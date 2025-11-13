import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <SectionTitle title="Let's Connect" />
      <p className="text-gray-300 max-w-xl mx-auto mt-6">
        Interested in collaborating or hiring me? Drop a message and let’s talk!
      </p>
      <div className="mt-8">
        <Button href="mailto:akashgupta176463@gmail.com">Contact Me</Button>
      </div>
    </section>
  );
}
