import { ArrowRight, MapPin } from "lucide-react";
import maracaiboImg from "@/assets/route-maracaibo.jpg";
import nacionalImg from "@/assets/route-nacional.jpg";
import maicaoImg from "@/assets/route-maicao.jpg";

const routes = [
  {
    title: "Maracaibo",
    subtitle: "Ciudad y Municipio Guajira",
    description: "Transporte local en Maracaibo y zonas del Municipio Indígena Bolivariano Guajira, Estado Zulia.",
    tag: "Local",
    image: maracaiboImg,
  },
  {
    title: "Rutas Nacionales",
    subtitle: "Venezuela completa",
    description: "Conectamos con los principales destinos del país. Viaja cómodo y seguro a cualquier ciudad de Venezuela.",
    tag: "Nacional",
    image: nacionalImg,
  },
  {
    title: "Frontera · Maicao",
    subtitle: "Colombia – Venezuela",
    description: "Servicio especializado en el corredor fronterizo hacia Maicao, Colombia. Trámites, equipaje y atención personalizada.",
    tag: "Internacional",
    image: maicaoImg,
  },
];

export default function Routes() {
  return (
    <section id="rutas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-condensed font-600 text-sm tracking-widest uppercase mb-3">
            Destinos
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none text-foreground">
            Nuestras <span className="text-gradient-red">Rutas</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-brand-border hover:border-primary transition-all duration-300 hover:shadow-red"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "var(--gradient-card)" }} />
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-condensed font-700 uppercase tracking-widest">
                  {route.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 bg-brand-surface">
                <div className="flex items-start gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-xs text-primary uppercase tracking-widest font-semibold">{route.subtitle}</p>
                </div>
                <h3 className="font-condensed font-black text-2xl uppercase text-foreground mb-3">
                  {route.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {route.description}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-condensed font-600 uppercase tracking-wide text-primary hover:text-brand-red-bright transition-colors group/link"
                >
                  Consultar disponibilidad
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
