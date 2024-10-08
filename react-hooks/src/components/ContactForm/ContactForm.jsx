import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  
    e.preventDefault();

    setContacts((prevContacts) => [
      ...prevContacts,
      { id: Date.now(), ...form },
    ]);

    setForm({
      name: "",
      phone: "",
    });
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Контактная Форма</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Введите ваше имя"
          />
        </div>

        <div>
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Введите ваш номер телефона"
          />
        </div>

        <button type="submit">Добавить контакт</button>
      </form>

      <div>
        <h2>Список Контактов</h2>
        {contacts.length === 0 ? (
          <p>Контактов пока нет.</p>
        ) : (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <div>
                  <strong>Имя:</strong> {contact.name}
                </div>
                <div>
                  <strong>Телефон:</strong> {contact.phone}
                </div>
                <button onClick={() => handleDelete(contact.id)}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
