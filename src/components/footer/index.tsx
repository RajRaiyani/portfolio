import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="border rounded-xl shadow p-7">
      <div className="grid gap-8 sm:grid-cols-3">
        <div data-aos="fade-left" data-aos-offset="100" className="space-y-4">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer passionate about building clean, efficient, and
            user-friendly web applications.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-offset="100" className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/resume" className="hover:underline">
              Resume
            </Link>
          </nav>
        </div>

        <div data-aos="fade-left" data-aos-offset="100" className="space-y-4">
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="flex space-x-4">
            <Link to="https://github.com" className="hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link to="https://linkedin.com" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link to="https://twitter.com" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              to="mailto:contact@example.com"
              className="hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-7" />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RP Raiyani. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
