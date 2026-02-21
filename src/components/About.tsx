import { Shield, Clock, MapPin, Users } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Unidades con mantenimiento riguroso y conductores profesionales certificados.",
  },
  {
    icon: Clock,
    title: "Puntualidad Total",
    description: "Cumplimos con los horarios establecidos. Tu tiempo es nuestro compromiso.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Servicio en Maracaibo, rutas nacionales y corredor fronterizo hacia Colombia.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Somos una asociación civil comprometida con el bienestar de cada pasajero.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-brand-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-primary font-condensed font-600 text-sm tracking-widest uppercase mb-3">
              Quiénes Somos
            </p>
            <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none text-foreground mb-6">
              Una empresa con{" "}
              <span className="text-gradient-red">propósito</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              <strong className="text-foreground">Transporte FILCURV</strong> — Asociación Civil de Transporte Los Filuos — es una organización legalmente constituida, comprometida con ofrecer un servicio de transporte terrestre seguro, formal y confiable en el Estado Zulia y a nivel nacional.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Operamos desde nuestra sede en la <strong className="text-foreground">Avenida Principal Los Filuos</strong>, Terminal de Pasajeros, Municipio Indígena Bolivariano Guajira, Estado Zulia, Venezuela. Conectamos a Maracaibo con destinos nacionales y la frontera con Colombia.
            </p>
            <div className="mb-8 p-6 rounded-lg bg-brand-surface border border-brand-border">
              <p className="text-foreground font-condensed font-700 tracking-wide uppercase mb-3">Nuestras Principales Rutas y Destinos:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Maracaibo y zonas del Municipio Indígena Bolivariano Guajira
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Coro, Falcón, Punto Fijo
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Parada en La Villa del Rosario, Municipio La Villa del Rosario
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Cabimas, Costa Oriental del Lago
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Corredor fronterizo hacia Maicao (Colombia)
                </li>
              </ul>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "100%", label: "Legal y formal" },
                { value: "3+", label: "Rutas activas" },
                { value: "24/7", label: "Disponibilidad" },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-t-2 border-primary pt-4">
                  <p className="font-condensed font-black text-3xl text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group p-6 rounded-lg border border-brand-border bg-brand-surface-2 hover:border-primary hover:shadow-red transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-condensed font-700 text-lg uppercase tracking-wide text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
