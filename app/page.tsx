import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import { ModeToggle } from "@/components/mode-toggle";
import ProjectCard from "./components/project-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background mx-auto container">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Mert Siliv</span>
            </Link>

            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.
                </p>
              </div>

              <div className="space-x-4">
                <Link href="https://github.com/mkjox" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">Github</span>
                  </Button>
                </Link>

                <Link href="https://linkedin.com/in/mert-siliv/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="mailto:mert.k.siliv@hotmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Travel App"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada efficitur convallis."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/mkjox"
                tags={["React Native", "PostgreSql", "Axios", "Figma", ".NET Core", "Rest API", "Fluent API", "JWT", "AutoMapper"]}
              />
              <ProjectCard
                title="TrivAI"
                description="Donec pellentesque urna id elit vulputate, eu accumsan leo commodo."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/mkjox"
                tags={["React", "Shadcn", "Axios", "PostgreSql", "Docker", "TailwindCSS"]}
              />
              <ProjectCard
                title="Habit Tracker"
                description="Sed venenatis id justo ut vulputate. In facilisis elit leo, id condimentum nunc venenatis eget."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/mkjox"
                tags={["React Native", "Figma", "SQLite", "React Native Paper", "Jest", "Expo"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            {/* TECHSTACK PLACEHOLDER */}
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Mert Siliv All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <ModeToggle />
      </div>
    </div>
  );
}
