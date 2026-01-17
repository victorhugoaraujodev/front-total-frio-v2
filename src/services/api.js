const API_BASE = "http://localhost:8000/api";

export async function getServices() {
  const response = await fetch(`${API_BASE}/services/`);
  if (!response.ok) throw new Error("Erro ao buscar serviços");
  return response.json();
}

export async function sendContact(data) {
  const response = await fetch(`${API_BASE}/contacts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao enviar contato");
  return response.json();
}