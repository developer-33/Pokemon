import React, { useState } from 'react';

const PokemonArtGallery = () => {
  // Example data, replace with dynamic data or fetch from API
  const [artworks] = useState([
    {
      id: 1,
      title: 'Pikachu Thunderbolt',
      imageUrl: 'https://storage.cloud.google.com/bucket3315/pokemon6.jpeg',
      artist: 'Ash Ketchum',
    },
    {
      id: 2,
      title: 'Charizard Blaze',
      imageUrl: 'https://storage.cloud.google.com/bucket3315/charizard-havilyn-whitfield.jpg',
      artist: 'Misty Waterflower',
    },
    {
      id: 3,
      title: 'Squirtle Squad',
      imageUrl: 'https://storage.cloud.google.com/bucket3315/ash-s-squirtle.avif',
      artist: 'Brock Stone',
    },
    // Add more artwork objects
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Pokémon Art Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artworks.map((art) => (
          <div key={art.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              src={art.imageUrl}
              alt={art.title}
              className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">{art.title}</h3>
                <p className="text-sm">By: {art.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonArtGallery;

