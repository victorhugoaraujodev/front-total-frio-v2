
import { useEffect, useState } from 'react'

type Service = {
  id: number
  title: string
  description: string
  price: string
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export function Services() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetch(`${API_URL}/api/services/`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

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
  )
}
