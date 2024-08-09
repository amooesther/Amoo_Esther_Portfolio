import logo from '../../src/assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa';


const Navbar = () => {
  return (
   <nav className=' mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
<img  className='mx-2 w-10' src={logo} alt="logo" />
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl text-pink-600'>
   <a href="https://www.linkedin.com/in/esther-amoo/" target='blank'><FaLinkedin/></a> 
   <a href="https://github.com/amooesther"><FaGithub/></a> 
   <a href={`mailto:amooesther2503@gmail.com`}> <FaEnvelope/></a>
   
</div>
   </nav>
  )
}

export default Navbar