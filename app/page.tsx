import ProjectsPage from "./projects/page";
import Skills from "./components/Skills";
import ServicesPage from "./services/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <h1 className="bg-red-500">
        Hello, My name is Roméo Rel - Next.js Developer
      </h1>
      <p>
        I’m Romeo Rel, a freelance Next.js developer specializing in
        high-performance web applications using React and Tailwind CSS.
      </p>

      <h2>This is the project section</h2>
      <ProjectsPage />

      <h2>This is skill section</h2>
      <Skills />

      <h2>This is the service section</h2>
      <ServicesPage />

      <h2>This is the Contact Section</h2>
      <ContactPage />
    </>
  );
}
