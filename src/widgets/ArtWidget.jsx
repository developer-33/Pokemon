import { useState } from 'react';

const ArtWidget = ({ artworks }) => {
  const [selectedArt, setSelectedArt] = useState(null);

  const openArtModal = (art) => {
    setSelectedArt(art);
  };

  const closeModal = () => {
    setSelectedArt(null);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {artworks.map((art, index) => (
        <div
          key={index}
          onClick={() => openArtModal(art)}
          className="cursor-pointer transform hover:scale-105 transition duration-300"
        >
          <img src={art.image} alt={art.title} className="rounded-lg shadow-lg" />
        </div>
      ))}
      
      {/* Modal */}
      {selectedArt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 w-3/4 lg:w-1/2">
            <h2 className="text-xl font-bold mb-4">{selectedArt.title}</h2>
            <img src={selectedArt.image} alt={selectedArt.title} className="mb-4" />
            <p>{selectedArt.description}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtWidget;
