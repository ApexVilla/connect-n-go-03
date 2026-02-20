import { Truck, Globe, Star, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transporte Interurbano",
    description:
      "Servicio de pasajeros entre Maracaibo y los principales municipios del Estado Zulia con unidades cómodas y seguras.",
  },
  {
    icon: Globe,
    title: "Transporte Fronterizo",
    description:
      "Servicio especializado en la ruta Maracaibo – Maicao (Colombia). Atendemos el corredor fronterizo con experiencia y formalidad.",
  },
  {
    icon: Star,
    title: "Seguridad y Confianza",
    description:
      "Unidades debidamente registradas, conductores certificados y seguros vigentes. Tu tranquilidad es nuestra prioridad.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención Personalizada",
    description:
      "Nuestro equipo está disponible para asistirte antes, durante y después de tu viaje. Comunicación directa por WhatsApp.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-brand-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-condensed font-600 text-sm tracking-widest uppercase mb-3">
            Lo que ofrecemos
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none text-foreground">
            Nuestros <span className="text-gradient-red">Servicios</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl border border-brand-border bg-brand-surface-2 hover:border-primary hover:shadow-red transition-all duration-300 overflow-hidden"
            >
              {/* Red number accent */}
              <span className="absolute top-4 right-4 font-condensed font-black text-5xl text-primary/10 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-condensed font-black text-xl uppercase tracking-wide text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
