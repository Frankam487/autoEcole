import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer l'envoi par mail
  const handleSend = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:votre-email@example.com?subject=Message%20de%20${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0ANom%20: ${encodeURIComponent(
      name
    )}%0AEmail%20: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-orange-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-6 sm:mx-12 p-6 md:p-12 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-600 leading-tight">
            Bienvenue à Auto-école <span className="text-6xl text-red-400 font-sans">ITGES</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Apprenez à conduire en toute sécurité avec nos formations complètes
            et personnalisées.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">

          <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Nos Services
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li className="flex items-center space-x-2">
                <i className="fas fa-car text-orange-500"></i>
                <span>
                  <strong>Permis B :</strong> Formation complète pour obtenir
                  votre permis de conduire.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-users text-orange-500"></i>
                <span>
                  <strong>Formation conduite accompagnée :</strong> Formation
                  pour les conducteurs en herbe.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-book text-orange-500"></i>
                <span>
                  <strong>Formation Code :</strong> Préparation à l'examen du
                  Code de la route.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-tachometer-alt text-orange-500"></i>
                <span>
                  <strong>Conduite en accéléré :</strong> Formation rapide pour
                  obtenir votre permis en un temps record.
                </span>
              </li>
            </ul>
          </section>

          {/* Section Contact */}
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Contactez-nous
            </h2>
            <p className="text-gray-700 mb-4">
              Vous avez des questions ? N'hésitez pas à nous contacter pour plus
              d'informations.
            </p>
            <form onSubmit={handleSend} className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Nom"
                aria-required="true"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email"
                aria-required="true"
              />
              <textarea
                placeholder="Votre message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-label="Message"
                aria-required="true"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-400 text-white font-semibold py-3 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
              >
                Envoyer
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;

