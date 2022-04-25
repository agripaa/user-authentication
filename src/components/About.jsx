import coffeAbout from './assets/coffe-about.jpg'
import './css/About.css'

const About = () => {
  return (
    <div>
      <section id='about'>
        <div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={coffeAbout} alt='coffe-about' className='w-75 mt-5' />
            </div>
            <div className='col-md-6'>
              <h3 className='fs-5 mb-0'>About Us</h3>
              <h1 className='display-6 mb-2'>What is a <b>Coffee Shop</b></h1>
              <hr className='w-50' />
              <p className='lead mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est vitae urna volutpat fermentum et sed dui. Donec tincidunt libero eu sem mattis ultrices. Vestibulum tempor aliquet leo, rhoncus congue ipsum fermentum eu. Aenean quis dui euismod, consequat ex non, commodo purus. Suspendisse pharetra condimentum placerat.
              </p>
              {/* <div className='button'>
                <button className='btn button px-4 py-2'>Get Started</button>
              </div> */}
              <button className='btn about-button me-4 rounded-pill px-4 py-2'>Get Started</button>
              <button className='btn about-buttons me-4 rounded-pill px-4 py-2'>Our Service</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About