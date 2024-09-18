import Login from "../components/Login"
import BackgroundPic from "../assets/Project_Pokemon2/new22.jpeg"


// 

const LoginPage = () => {

  const Pic = BackgroundPic
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Pic})` }}
    >
    
        <Login />
        <div className="flex justify-center items-center h-screen">
        
        </div>
    
  
    </div>
  )
}

export default LoginPage