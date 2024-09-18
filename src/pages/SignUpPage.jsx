import SignUp from "../components/SignUpForm"
import BackgroundPic from "../assets/Project_Pokemon2/new22.jpeg"

const SignUpPage = () => {
  const Pic = BackgroundPic
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Pic})` }}
    >
        <SignUp />
     
    </div>
  )
}

export default SignUpPage