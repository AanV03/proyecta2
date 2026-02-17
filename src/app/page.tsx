import Hero from "@/app/_components/hero";
import AccessCards from "@/app/_components/access-cards";
import TopBar from "@/app/_components/topbar";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen px-6 py-16 page-main">
      <div className="mx-auto max-w-7xl">
        

        <Hero />

        <section 
          className="mt-12"
          aria-labelledby="quick-access-title"
        >
          <h2 id="quick-access-title" className="text-2xl font-semibold heading-body">
            Accesos rápidos
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Enlaces directos a los módulos más utilizados.
          </p>
          <AccessCards />
        </section>

        <footer id="contact" className="mt-20 pt-8 text-sm footer-contact">
          <div>© {new Date().getFullYear()} Proyecta UTCH — Dirección institucional</div>
        </footer>
      </div>
    </main>
    </>
  );
}
