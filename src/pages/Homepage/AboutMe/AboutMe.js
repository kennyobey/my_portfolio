import React from "react";
import SectionTitle from "../../../components/Typography/SectionTitle";
import SectionHead from "../../../components/Typography/SectionHead";

const AboutMe = () => {
  const props = {
    img: "https://cdn.lordicon.com/bhfjfgqz.json",
    text: "About Me",
  };
  return (
    <section id="about" className="mb-16">
      <SectionTitle props={props} />
      <SectionHead>
        Every successful career is built on
        <span className="text-primary"> passion</span>; it’s the driving force
        that transforms curiosity into expertise and aspirations into
        milestones.
      </SectionHead>

      <p className="text-accent max-w-[800px]">
        My journey into software engineering began with a deep-seated passion
        for mobile development and a desire to contribute my skills to solving
        real-world problems. What started as a fascination with mobile apps has
        evolved into a focus on building efficient, high-performance solutions
        tailored to modern users. With over four years of experience as a
        Flutter developer, I have specialized in creating cross-platform mobile
        applications using Flutter and Dart. My work spans diverse industries,
        including e-commerce, fintech, and education, developing intuitive and
        user-friendly applications. I have utilized state management tools like
        GetX, Bloc, and Stacked architecture to design and maintain
        multi-feature apps. I also possess expertise in RESTful and GraphQL API
        integration, ensuring robust and optimized performance across platforms.
        Recently, I’ve been exploring the vast possibilities of artificial
        intelligence and how it can revolutionize software development to
        address global challenges. I am committed to continuous learning,
        whether it be expanding my knowledge in AI, cloud services, and refining
        my current skills in backend development. Outside of coding, I dedicate
        my time to exploring new technologies, contributing to open-source
        projects, and expanding my understanding of AI and DevOps.
      </p>
      <div className="flex">
        <a
          href="https://docs.google.com/file/d/1JXyOqz_QATMpkzVmwCGsJR9MzR5fmA4cXkuuh9IpNSc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hover:text-primary transition duration-300 text-lg flex gap-2 items-center uppercase icon mt-10">
            <lord-icon
              target="button"
              src="https://cdn.lordicon.com/egiwmiit.json"
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px" }}
            ></lord-icon>
            Get my CV
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
