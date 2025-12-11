"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "5930995245969";

export default function CotizarPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);

    const nombre = formData.get("nombre")?.toString() || "";
    const tipoPieza = formData.get("tipoPieza")?.toString() || "";
    const material = formData.get("material")?.toString() || "";
    const quilates = formData.get("quilates")?.toString() || "";
    const peso = formData.get("peso")?.toString() || "";
    const estado = formData.get("estado")?.toString() || "";
    const ciudad = formData.get("ciudad")?.toString() || "";
    const contacto = formData.get("contacto")?.toString() || "";
    const comentario = formData.get("comentario")?.toString() || "";

    const mensaje = `
Hola, quiero una cotización:

👤 Nombre: ${nombre}
📍 Ciudad: ${ciudad}

💎 Tipo de pieza: ${tipoPieza}
🔗 Material: ${material}
✨ Quilates: ${quilates}
⚖️ Peso aproximado: ${peso} gramos
📌 Estado: ${estado}

📞 Medio de contacto: ${contacto}

📝 Comentarios / detalles extra:
${comentario}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
    setSending(false);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="w-full border-b border-neutral-200">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-sm text-neutral-600 hover:text-black transition">
            ← Volver al inicio
          </Link>
          <p className="text-sm font-semibold tracking-wide text-black">
            Formulario de cotización
          </p>
        </nav>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            Enviar datos para cotización
          </h1>
          <p className="text-sm text-neutral-600 max-w-2xl">
            Completa el formulario con los datos de tu pieza. Recibirás una
            cotización inicial por WhatsApp. El valor final se confirma en el
            local al verificar peso, pureza y estado real de la joya.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm"
        >
          {/* DATOS PERSONALES */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Datos de contacto
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="nombre">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="ciudad">
                  Ciudad *
                </label>
                <input
                  id="ciudad"
                  name="ciudad"
                  required
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                  placeholder="Ej: Quito, Ecuador"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 text-xs">
              <label className="text-neutral-700" htmlFor="contacto">
                Medio de contacto preferido *
              </label>
              <input
                id="contacto"
                name="contacto"
                required
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                placeholder="Ej: WhatsApp, llamada, número alterno..."
              />
            </div>
          </div>

          {/* DATOS DE LA PIEZA */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
              Datos de la pieza
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="tipoPieza">
                  Tipo de pieza *
                </label>
                <select
                  id="tipoPieza"
                  name="tipoPieza"
                  required
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Anillo">Anillo</option>
                  <option value="Cadena">Cadena</option>
                  <option value="Pulsera">Pulsera</option>
                  <option value="Aretes">Aretes</option>
                  <option value="Reloj">Reloj</option>
                  <option value="Joyas usadas o en mal estado">
                    Joya usadas o en mal estado 
                  </option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="material">
                  Material principal *
                </label>
                <select
                  id="material"
                  name="material"
                  required
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Oro amarillo">Oro amarillo</option>
                  <option value="Oro blanco">Oro blanco</option>
                  <option value="Oro rosado">Oro rosado</option>
                  <option value="Plata 925">Plata 925</option>
                  <option value="Acero / mezcla">Acero / mezcla</option>
                  <option value="No estoy seguro(a)">No estoy seguro(a)</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="quilates">
                  Quilates (si los conoces)
                </label>
                <input
                  id="quilates"
                  name="quilates"
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                  placeholder="Ej: 10k, 14k, 18k..."
                />
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="peso">
                  Peso aproximado (gramos)
                </label>
                <input
                  id="peso"
                  name="peso"
                  type="number"
                  step="0.01"
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                  placeholder="Ej: 3.5"
                />
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <label className="text-neutral-700" htmlFor="estado">
                  Estado de la pieza *
                </label>
                <select
                  id="estado"
                  name="estado"
                  required
                  className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Como nueva">Como nueva</option>
                  <option value="Buen estado">Buen estado</option>
                  <option value="Con desgaste">Con desgaste</option>
                  <option value="Rota / incompleta">Rota / incompleta</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1 text-xs">
              <label className="text-neutral-700" htmlFor="comentario">
                Comentarios adicionales
              </label>
              <textarea
                id="comentario"
                name="comentario"
                rows={3}
                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-[13px] text-black outline-none focus:border-black resize-none"
                placeholder="Ej: Tiene piedras, le falta el broche, es un reloj de marca, etc."
              />
            </div>

            <p className="text-[11px] text-neutral-500">
              Puedes adjuntar fotos de la pieza directamente en el chat de
              WhatsApp después de enviar este formulario.
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={sending}
              className="rounded-full border border-black bg-black px-6 py-2 text-xs font-semibold text-white hover:bg-white hover:text-black transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Abriendo WhatsApp..." : "Enviar datos por WhatsApp"}
            </button>

            <p className="text-[11px] text-neutral-500 max-w-xs">
              Al enviar, se abrirá una conversación en WhatsApp con toda la
              información de tu pieza para que el negocio pueda darte una
              cotización inicial.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
