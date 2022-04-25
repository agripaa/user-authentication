import './css/Home.css'

const Home = () => {
  return (
    <div>
        <section id="home">
            <div className='container'>
                <div className='row justify-content-center'>
                <div className='col-md-8 mt-5 content'>
                    <h1 className='display-4 fw-bolder mb-4 text-center'>Wellcome To Coffe Shop!!</h1>
                    <p className='lead text-center fs-4 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse eget imperdiet lorem, quis bibendum velit. Nulla suscipit leo vel semper ornare. Mauris a dui ultrices, euismod metus interdum, pulvinar turpis.</p>
                    <div className='buttons d-flex justify-content-center'>
                        <button className='btn buttons me-4 rounded-pill px-4 py-2'>Get Qoute</button>
                        <button className='btn buttonss me-4 rounded-pill px-4 py-2'>Our Service</button>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    </div>
  )
}

export default Home