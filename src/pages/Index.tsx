import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "@/components/ThemeToggle";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-transparent bg-gradient-canvas">
      <header className="container py-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
          Engueng Betare Leo Orphey Junior
        </a>
        <nav className="flex items-center gap-4" aria-label="Navigation principale">
          <a href="#projects" className="story-link hidden sm:inline-block">Projets</a>
          <a href="#contact" className="story-link hidden sm:inline-block">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="top" className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-8 py-8 lg:py-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Engueng Betare Leo Orphey Junior — Développeur Frontend
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "80ms" }}>
            Développeur Frontend passionné par les interfaces propres, rapides et accessibles.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" aria-label="Aller à la section projets">
              <Button className="hover-scale" size="lg">
                Afficher mes projets
              </Button>
            </a>
            <a href="#contact" aria-label="Aller à la section contact">
              <Button variant="secondary" className="hover-scale" size="lg">
                Me contacter
              </Button>
            </a>
          </div>
        </section>

        <aside className="lg:col-span-4">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="font-display">Compétences</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <Badge key={s} variant="secondary" className="text-sm">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </aside>

        <section id="projects" className="lg:col-span-12 py-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">Projets</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <article key={i} className="group">
                <Card className="h-full transition-colors group-hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-display">Projet {i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Description courte du projet {i}. Performance, accessibilité et belles interfaces.
                    </p>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="lg:col-span-12 py-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">Contact</h2>
          <form className="grid gap-4 max-w-xl" aria-label="Formulaire de contact">
            <label className="grid gap-2">
              <span>Nom</span>
              <input
                type="text"
                name="name"
                aria-required="true"
                className="h-11 rounded-md border border-input bg-background px-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <label className="grid gap-2">
              <span>Email</span>
              <input
                type="email"
                name="email"
                aria-required="true"
                className="h-11 rounded-md border border-input bg-background px-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <label className="grid gap-2">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                aria-required="true"
                className="rounded-md border border-input bg-background p-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <div className="flex gap-3 items-center">
              <Button type="submit" className="hover-scale">Envoyer</Button>
              <a href="mailto:contact@example.com" className="text-sm underline" aria-label="Envoyer un email">Ou m'écrire directement</a>
            </div>
          </form>
        </section>
      </main>

      <footer className="container py-10 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Engueng Betare Leo Orphey Junior. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Index;
