import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  const WHATSAPP_NUMBER = "5930995245969";
  const DISPLAY_WHATSAPP = "+593 099 524 5969";

  return (
    <main className="min-h-screen bg-white text-[#222222]">
      {/* NAVBAR */}
      <header className="w-full border-b border-[#E5E7EB]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-lg font-semibold tracking-wide">
            COMPRO ORO & RELOJES
          </div>

          <div className="flex gap-4 text-sm">
            <Link
              href="#servicios"
              className="text-[#6B7280] hover:text-[#222222] transition"
            >
              Servicios
            </Link>

            <Link
              href="#ubicacion"
              className="text-[#6B7280] hover:text-[#222222] transition"
            >
              Ubicación
            </Link>

            <Link
              href="/cotizar"
              className="rounded-full border border-[#222222] px-4 py-1 text-xs text-[#222222] hover:bg-[#222222] hover:text-white transition"
            >
              Cotizar ahora
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <FadeInSection>
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          {/* IMÁGENES */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/image/monedas.webp"
                  alt="Monedas y oro"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -right-10 top-16 w-40 md:w-56 rounded-2xl border border-[#E5E7EB] bg-white shadow-xl overflow-hidden">
                <img
                  src="/image/relog.webp"
                  alt="Joyas de oro"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXTO HERO */}
          <div className="flex-1 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]">
              COMPRA DE ORO · PLATA · RELOJES
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-[#222222]">
              Oro, plata y Relojes
            </h1>

            <p className="max-w-xl text-sm text-[#6B7280]">
              Negocio físico con atención segura y confiable. Trae tus piezas y
              recibe una cotización justa según peso, material y estado.
            </p>

            {/* BOTONES */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20por%20mi%20oro%20%2F%20plata%20%2F%20reloj.`}
                target="_blank"
                className="rounded-full border border-[#222222] px-5 py-2 text-xs font-semibold text-[#222222] hover:bg-[#222222] hover:text-white transition"
              >
                Hablar por WhatsApp
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="rounded-full border border-[#222222] px-5 py-2 text-xs font-semibold text-[#222222] hover:bg-[#222222] hover:text-white transition"
              >
                Llamar ahora
              </a>

              <Link
                href="/cotizar"
                className="rounded-full border border-[#222222] px-5 py-2 text-xs font-semibold text-[#222222] hover:bg-[#222222] hover:text-white transition"
              >
                Enviar datos para cotización
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* SERVICIOS */}
      <FadeInSection>
        <section id="servicios" className="border-t border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-semibold text-[#222222] mb-3">
              ¿Qué compramos?
            </h2>

            <p className="text-sm text-[#6B7280] mb-8 max-w-2xl">
             
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* TARJETA 1 */}
              <FadeInSection>
                <div className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm cursor-pointer transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-white hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] group-hover:scale-110 transition-transform duration-300">
                      💰
                    </span>
                    <h3 className="text-sm font-semibold text-[#222222] uppercase tracking-[0.15em]">
                      Compra de oro
                    </h3>
                  </div>
                </div>
              </FadeInSection>

              {/* TARJETA 2 */}
              <FadeInSection>
                <div className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm cursor-pointer transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-white hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] group-hover:scale-110 transition-transform duration-300">
                      ⛓️
                    </span>
                    <h3 className="text-sm font-semibold text-[#222222] uppercase tracking-[0.15em]">
                      Compra de plata
                    </h3>
                  </div>
                </div>
              </FadeInSection>

              {/* TARJETA 3 */}
              <FadeInSection>
                <div className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm cursor-pointer transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-white hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] group-hover:scale-110 transition-transform duration-300">
                      ⌚
                    </span>
                    <h3 className="text-sm font-semibold text-[#222222] uppercase tracking-[0.15em]">
                      Compra de relojes
                    </h3>
                  </div>
                </div>
              </FadeInSection>

              {/* TARJETA 4 */}
              <FadeInSection>
                <div className="group flex flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm cursor-pointer transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-white hover:shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-[#D4AF57] group-hover:scale-110 transition-transform duration-300">
                      🧩
                    </span>
                    <h3 className="text-sm font-semibold text-[#222222] uppercase tracking-[0.15em]">
                      Joyas usadas o en mal estado
                    </h3>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* UBICACIÓN */}
      <FadeInSection>
        <section id="ubicacion" className="border-t border-[#E5E7EB] bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="text-xl font-semibold text-[#222222] mb-4">
                Ubicación
              </h2>
              <p className="text-sm text-[#6B7280] mb-4">
                Visítanos en nuestro local físico y recibe asesoría personalizada.
              </p>

              <div className="space-y-2 text-sm text-[#6B7280]">
                <p>
                  <span className="font-semibold text-[#222222]">Dirección: </span>
                  Avenida La Coruña y 12 de Octubre, Condominio General Artigas,
                  Quito, Ecuador
                </p>
                <p>
                  <span className="font-semibold text-[#222222]">Ciudad: </span>
                  Quito - Pichincha
                </p>
                <p>
                  <span className="font-semibold text-[#222222]">Teléfono: </span>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="underline hover:text-[#222222]"
                  >
                    {DISPLAY_WHATSAPP}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#222222]">WhatsApp: </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    className="underline hover:text-[#222222]"
                  >
                    {DISPLAY_WHATSAPP}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[#222222]">Horario: </span>
                  Lunes a viernes, 9:00 a.m. – 6:00 p.m. <br />
                  Sábados: con cita previa.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/6eHKmesBhQrqJjp39"
                  target="_blank"
                  className="rounded-full border border-[#222222] px-4 py-2 text-xs font-semibold text-[#222222] hover:bg-[#222222] hover:text-white transition"
                >
                  Ver ruta en Google Maps
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20saber%20c%C3%B3mo%20llegar%20al%20local.`}
                  target="_blank"
                  className="rounded-full border border-[#222222] px-4 py-2 text-xs font-semibold text-[#222222] hover:bg-[#222222] hover:text-white transition"
                >
                  Preguntar cómo llegar
                </a>
              </div>
            </div>

            {/* MAPA */}
            <div className="h-[260px] md:h-[320px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63836.6915584475!2d-78.5589818!3d-0.2032265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b8044a4e267%3A0x80b0c013ed71bb4!2sCompro%20Oro!5e0!3m2!1ses-419!2sco!4v1726435867779!5m2!1ses-419!2sco"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 text-xs text-[#6B7280] md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#222222]">
              Compro Oro & Relojes
            </p>
            <p>
              Compra de oro, plata y relojes, valoración honesta y atención
              personalizada en nuestro local físico.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#222222]">Contacto</p>
            <p>
              Teléfono:{" "}
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="underline hover:text-[#222222]"
              >
                {DISPLAY_WHATSAPP}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="underline hover:text-[#222222]"
              >
                {DISPLAY_WHATSAPP}
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#222222]">Horario</p>
            <p>Lunes a sábado:</p>
            <p>9:00 a.m. – 6:00 p.m.</p>
            <p className="mt-2 text-[11px]">
              *Horarios especiales en festivos, confirmar por WhatsApp.
            </p>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 py-4 text-[11px] text-[#6B7280] gap-2">
            <p>
              © {new Date().getFullYear()} Compro Oro & Relojes. Todos los derechos reservados.
            </p>
            <p>
              Desarrollado por{" "}
              <span className="text-[#222222] font-medium">
                Erika Bustamante - Lumicode
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20por%20mi%20oro%20%2F%20plata%20%2F%20reloj.`}
        target="_blank"
        aria-label="Hablar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#222222] text-white shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition"
      >
        <span className="text-2xl">💬</span>
      </a>
    </main>
  );
}
