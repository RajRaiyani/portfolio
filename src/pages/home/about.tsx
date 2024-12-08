export default function About() {
  return (
    <section id="about" className="sm:py-14 p-7">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        About Me
      </h2>
      <div className="mt-4 w-full flex flex-col-reverse md:flex-row">
        <div className="w-full flex flex-col justify-center">
          <p className="mt-4 text-lg text-muted-foreground">
            I'm a student of computer science. passionate about technology and
            softwares. I love building software that solves real-world problems
            and improves the lives of those around me. When I'm not coding, you
            can find me exploring new technologies, watching other developers
            code, or playing video games.
          </p>
        </div>
      </div>
    </section>
  );
}
