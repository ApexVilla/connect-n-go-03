import frotaImg from "@/assets/frota.png";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Unidades modernas y ejecutivas modelo Van",
    "Aire acondicionado de alto rendimiento",
    "Asientos reclinables y confortables",
    "Sistema de rastreo satelital (GPS)",
    "Mantenimiento preventivo riguroso",
    "Conductores profesionales y certificados",
];

export default function Fleet() {
    return (
        <section id="frota" className="py-24 bg-brand-surface-2 border-t border-brand-border">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <p className="text-primary font-condensed font-600 text-sm tracking-widest uppercase mb-3">
                            Nuestra Flota
                        </p>
                        <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-none text-foreground mb-6">
                            Viaja con <span className="text-gradient-red">estilo</span> y seguridad
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed mb-8">
                            En Transporte FILCURV contamos con una flota de vehículos de última generación, diseñados para ofrecerte la máxima comodidad en rutas largas y cortas. Nuestra prioridad es tu seguridad y tranquilidad durante todo el viaje.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/90 leading-tight">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#contacto"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-condensed font-700 text-sm tracking-widest uppercase rounded bg-gradient-red text-primary-foreground shadow-red hover:shadow-none hover:scale-105 transition-all duration-200"
                        >
                            Consultar Tarifas
                        </a>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-brand-border group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <img
                                src={frotaImg}
                                alt="Flota de Transporte FILCURV"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-brand-red-dark/20 blur-2xl -z-10 rounded-[3rem]" />
                    </div>

                </div>
            </div>
        </section>
    );
}
