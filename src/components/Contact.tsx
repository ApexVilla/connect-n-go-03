import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value:
      "Avenida Principal Los Filuos, Terminal de Pasajeros, Municipio Indígena Bolivariano Guajira, Estado Zulia, Venezuela.",
  },
  {
    icon: Phone,
    label: "Llamadas",
    value: "+58 412-7337412",
    href: "tel:+584127337412",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+58 412-0726834",
    href: "https://wa.me/584120726834",
  },
  {
    icon: Clock,
    label: "Horario de Atención",
    value: "Lunes a Domingo: 5:00 AM – 8:00 PM",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary font-condensed font-600 text-sm tracking-widest uppercase mb-3">
            Estamos aquí para ti
          </p>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none text-foreground">
            <span className="text-gradient-red">Contáctanos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="space-y-6">
            {info.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-6 rounded-xl border border-brand-border bg-brand-surface hover:border-primary transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/584120726834?text=Hola%20FILCURV,%20deseo%20información%20sobre%20sus%20rutas%20y%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-red text-primary-foreground font-condensed font-700 text-base tracking-widest uppercase shadow-red hover:shadow-none hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp Ahora
            </a>
          </div>

          {/* Right: Map embed */}
          <div className="rounded-xl overflow-hidden border border-brand-border shadow-red h-96">
            <iframe
              title="Ubicación FILCURV"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62892.68551820965!2d-72.32399!3d11.38405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87af3f2d7d8e3f%3A0x1e0a5b7c3e0f5b0c!2sMunicipio%20Guajira%2C%20Zulia%2C%20Venezuela!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
