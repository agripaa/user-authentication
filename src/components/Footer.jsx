import React from 'react'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import './css/Footer.css'

const Footer = () => {
  return (
    <footer>
         <div className='footer-content'>
             <h3>Coffe Shop</h3>
             <p>Jika ada yang perlu ditanya atau lainnya bisa langsung kunjungi social media kita</p>
             <ul className='social'>
                 <li><a href='https://www.facebook.com/profile.php?id=100072329021456'><Facebook icon="fa-brands fa-facebook" className='icon'/></a></li>
                 <li><a href='https://www.instagram.com/real.jounny/'><Instagram icon="fa-brands fa-instagram" className='icon' /></a></li>
                 <li><a href='https://www.linkedin.com/in/agrieva-xananda-7a753422b/'><LinkedIn icon="fa-brands fa-linkedin" className="icon"  /></a></li>
             </ul>                            
         </div>
         <div className='footer-bottom'>
           <p>copyright &copy;2022 Coffe Shop. design by <span>Jounny</span></p> 
         </div>
    </footer>
  );
};

export default Footer