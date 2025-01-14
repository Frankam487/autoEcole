import React, { useState } from "react";

// Composant Modal
const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
        <h3 className="text-2xl font-semibold mb-4">Demander un devis</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Nom complet
            </label>
            <input
              id="name"
              type="text"
              placeholder="Entrez votre nom"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Entrez votre email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg mb-2">
              Votre message
            </label>
            <textarea
              id="message"
              placeholder="Dites-nous ce dont vous avez besoin"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
              onClick={closeModal}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Composant principal
function Avis() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">
            Services de Traduction en Ligne
          </h1>
          <p className="mt-2 text-lg">
            Des traductions rapides et professionnelles dans toutes les langues.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Autres sections */}
        <section className="bg-blue-600 text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Obtenez votre traduction aujourd'hui !
          </h2>
          <p className="mb-6">
            Recevez une estimation gratuite en quelques minutes. N'attendez plus
            pour traduire vos documents.
          </p>
          <button
            onClick={openModal}
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Demander un devis
          </button>
        </section>

        {/* Autres sections */}

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Traduction en ligne. Tous droits réservés.</p>
          </div>
        </footer>
      </main>

      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default Avis;
