import { useEffect, useState } from "react";
import { getServices } from "../services/api";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices().then(data => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center py-20">Carregando...</p>;

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="border rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}