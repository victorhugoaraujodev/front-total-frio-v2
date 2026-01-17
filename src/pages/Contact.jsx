import { useState } from "react";
import { sendContact } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await sendContact(form);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="container mx-auto px-4 py-16 max-w-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Fale Conosco</h2>

      {success && <p className="bg-green-100 p-3 mb-4">Mensagem enviada!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Nome" onChange={handleChange} value={form.name} className="w-full border p-3 rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} className="w-full border p-3 rounded" />
        <textarea name="message" placeholder="Mensagem" onChange={handleChange} value={form.message} className="w-full border p-3 rounded h-32" />
        <button className="w-full bg-blue-600 text-white py-3 rounded font-bold">Enviar</button>
      </form>
    </section>
  );
}