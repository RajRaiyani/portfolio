import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Twitter } from "lucide-react";
import PosterImg from "@/assets/images/poster.webp";
import ResumeLink from "@/assets/docs/resume.pdf";

function Hero() {
  return (
    <section className="my-4 flex flex-col md:flex-row gap-4 py-36 md:py-10">
      <div className="p-7 w-full flex flex-col gap-5 justify-center">
        <div className="space-y-4">
          <h1
            data-aos="fade-right"
            className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl"
          >
            Hi, I'm Raj Raiyani
            <br className="" />
            Student Of Computer Science
          </h1>

          <p
            data-aos="fade-right"
            className="text-lg text-muted-foreground sm:text-xl"
          >
            creator of&nbsp;
            <a
              href="https://simplepg.com/"
              className="text-blue-500"
              target="_blank"
            >
              simplepg.com
            </a>
            , co founder and CTO of{" "}
            <a
              href="https://topgrowth.in/"
              className="text-blue-500"
              target="_blank"
            >
              TopGrowth
            </a>
            .
            <br /> loves to build things that people can use.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <a href={ResumeLink} download="RP_resume">
            <Button className="group" data-aos="flip-up">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </a>
          <div className="flex gap-4">
            <Button
              data-aos="fade-up"
              size="icon"
              variant="outline"
              onClick={() => {
                window.open("https://github.com/RajRaiyani", "_blank");
              }}
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              data-aos="fade-up-left"
              size="icon"
              variant="outline"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/rp-raiyani/",
                  "_blank"
                );
              }}
            >
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              data-aos="fade-left"
              size="icon"
              variant="outline"
              onClick={() => {
                window.open("https://x.com/RPRaiyani", "_blank");
              }}
            >
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-2/3 hidden md:flex items-center justify-center">
        <img
          src={PosterImg}
          data-aos="zoom-in"
          alt="Developer portrait"
          className="w-96 grayscale"
        />
      </div>
    </section>
  );
}

export default Hero;
