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
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto cursor-pointer">
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
                  <Button variant="outline" size="icon" className="cursor-pointer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">Github</span>
                  </Button>
                </Link>

                <Link href="https://linkedin.com/in/mert-siliv/" target="_blank">
                  <Button variant="outline" size="icon" className="cursor-pointer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="mailto:mert.k.siliv@hotmail.com">
                  <Button variant="outline" size="icon" className="cursor-pointer">
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
                title="Pandora Frontend"
                description="Project built for keeping passwords. Multiple encryptions applied, focused on simplicity and safety."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Mkjox/PandoraFrontend"
                tags={["React Native", "Redux", "PostgreSql", "Axios", "React Native Paper", "Jest", "Expo", "Figma", "TS"]}
              />
              <ProjectCard
                title="Travel App Frontend"
                description="Project built for exploring routes for traveling (hiking, cycling, etc.)."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Mkjox/TravelAppClient"
                tags={["React Native", "Axios", "Figma", "Expo", "TS", "JS"]}
              />
              <ProjectCard
                title="Travel App Backend"
                description="Backend for Travel App Client. Built with .NET Core 8."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Mkjox/TravelAppApi"
                tags={[".NET Core", "PostgreSql", "Rest API", "Fluent API", "JWT", "AutoMapper", "Unit of Work", "Generic Repository", "EF Core", "C#"]}
              />
              <ProjectCard
                title="TrivAI Frontend"
                description="Supposed to be a Trivia app powered by AI. Discontinued at the moment, Also private repository."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Mkjox"
                tags={["React", "Shadcn", "Axios", "PostgreSql", "Docker", "TailwindCSS", "JS"]}
              />
              <ProjectCard
                title="Habit Tracker"
                description="Project made for tracking habits."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Mkjox/HabitTracker"
                tags={["React Native", "SQLite", "React Native Paper", "Expo", "Victory Native", "TS"]}
              />
              <ProjectCard
                title="Hotel Tracker"
                description="App made to showcase how i do my designs basically. Used mock data in it."
                // image="/placeholder.svg?height=400&width=600"
                link="https://github.com/Mkjox/Hotel-App"
                tags={["React Native", "Figma", "Mock Data", "Axios", "JS"]}
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
                Get in Touch (Doesn&apos;t work right now)
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
