


// import backgroundImage from 'https://storage.cloud.google.com/bucket3315/Desktop%20Background.bmp'; // import your image

// const ProfileBackground = () => {
//   return (
//     <div
//       className="bg-cover bg-center h-screen bg-profile-bg"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       {/* Your content goes here */}
//       <div className="text-white p-8">
//         <h1 className="text-4xl font-bold">Welcome to Pokémon Fansite</h1>
//         <p>Explore the world of Pokémon</p>
//       </div>
//     </div>
//   );
// };

// export default ProfileBackground;


const ProfileBackground = () => {
  return (
    <div className="bg-profile-bg bg-cover bg-center h-screen">
      {/* Your content goes here */}
      <div className="text-white p-8">
        <h1 className="text-4xl font-bold">Welcome to Pokémon Fansite</h1>
        <p>Explore the world of Pokémon</p>
      </div>
    </div>
  );
};

export default ProfileBackground;
