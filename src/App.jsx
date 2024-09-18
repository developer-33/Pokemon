// // import BackgroundImage from './components/BackgroundIamge'
// import Navbar from './components/Navbar'
// import Mainsection from './components/Mainsection'

// // import ArtGallery from './pages/ArtGallery'

// // import Navbar2 from './components/Navbar2'
// import './input.css'

// function App() {
 

//   return (
    
//     <div>

//           <Mainsection />
//        <Navbar />
//     </div>
 
    
      
    
    
      
  
        
   
//   )
// }

// export default App



// App.js
import BackgroundPic from "./assets/Project_Pokemon2/new22.jpeg"
import Navbar from './components/Navbar';
import Mainsection from './components/Mainsection';

function App() {
  const Pic = BackgroundPic
  return (
    <div
       className="h-screen bg-cover bg-scroll bg-center"
       style={{ backgroundImage: `url(${Pic})` }}
    >

      <Navbar />
      <Mainsection />
 
    </div>
      
    
  );
}

export default App;

