
import { useEffect, useState } from "react";

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
};

export function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services/")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <strong>R$ {service.price}</strong>
        </div>
      ))}
    </div>
  );
}
