// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage'
// import ArtGalleryPage from '../pages/ArtGalleryPage';
// import Homepage from '../pages/HomePage';
// import ForumPage from '../pages/Fourm';
// import SettingsPage from '../pages/SettingsPage';

// // import BackgroundImage from './ui/OpenBackgroundImage'; // Import your BackgroundImage component
//  // Import your Home component


// function Mainsection() {
//   return ( 
//     <div>

//     <Router>
//       <Routes>
//         {/* Define the routes */}
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login-page" element={<LoginPage />} />
//         <Route path="/art-gallery" element={<ArtGalleryPage />} />
//         <Route path="/fourm" element={<ForumPage />} />
//         <Route path="/settings" element={<SettingsPage />} />
    

//       </Routes>
//     </Router> 
//      </div> 
     
     
//   );
// }

// export default Mainsection;

// Mainsection.js
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ArtGalleryPage from '../pages/ArtGalleryPage';
import Homepage from '../pages/HomePage';
import ForumPage from '../pages/FourmPage'; // Fix the typo in import name
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';
import PokemonPage from '../pages/PokemonPage'
import PokemonList2 from '../pages/TryPokemonPage';
import SignUp from './SignUpForm';
import NotifacationsPage from '../pages/NotifacationsPage';

function Mainsection() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/art-gallery" element={<ArtGalleryPage />} />
        <Route path="/forum" element={<ForumPage />} /> {/* Corrected path */}
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/all-pokemon" element={<PokemonPage />} />
        <Route path="/try-pokemon" element={<PokemonList2 />} />
        <Route path="/notifacation" element={<NotifacationsPage />} />
      </Routes>
    </div>
  );
}

export default Mainsection;
