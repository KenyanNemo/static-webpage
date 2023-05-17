import './App.css';

function App() {
  return (
    <div>
      <div className='nav'>

      <div className='navRight'>
      <div className='dropdown'>
        <button className='langButton'><img src='https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?w=1060&t=st=1682342000~exp=1682342600~hmac=0400c2d1807f37b322a609c76c3aeb7224e9d29d9c62ea96711861383caff2e2' height='10' width='15'/> EN</button>
        <div className='dropdownC'>
        <button ><img src='https://img.freepik.com/free-vector/illustration-spain-flag_53876-18168.jpg?w=1060&t=st=1682342320~exp=1682342920~hmac=463e1c1083f4aae08988c4846062d52c80dc2670059027b74a71743c97c48fea' height='10' width='15'/> ES</button>
        <button ><img src='https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1060&t=st=1682342425~exp=1682343025~hmac=b61180c05d409a31d08cd82f8ca4be1715a1056fc2217e257219fb2f148ba526' height='10' width='15'/> FR</button>
        <button ><img src='https://img.freepik.com/free-vector/illustration-italy-flag_53876-27098.jpg?w=1060&t=st=1682342513~exp=1682343113~hmac=d570621bd25aeae3f995cf5193ee208de2d82fe62b6002aeda7c601ebc5ce2d3' height='10' width='15'/> IT</button>
        </div>
        </div>
        <button className='downloadButton'>Download App</button>
      </div>

        <div className='navLeft'>
         <a href='#'><img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63aad7fec90d972455dac546_Group%201000001037.svg' alt='logo'/></a>
        </div>

        <div className='navMid'>
        <div className='dropdown'>
        <button className='dropdownButton'>Who we are </button>
        <div className='dropdownC'>
          <a href='#'>Our Story</a>
          <a href='#'>Careers</a>
          </div>
          </div>
          <div className='dropdown'>
        <button className='dropdownButton'>How it works </button>
        <div className='dropdownC'>
          <a href='#'>FAQs</a>
          <a href='#'>Security</a>
          </div>
          </div>
        <a href='#'>Countries</a>
        <a href='#'>Get Help</a>
      </div>
      
      
      </div>

      <section className='body1'>
        <div>
       <h1 >Send money with love</h1> 
       <img className='userImg' src='https://assets-global.website-files.com/634a9930c5b24337cbbac93b/63c57ffb287b3418d4d91e95_Home-Hero-Image-p-500.jpg' alt='user' height='auto' width='100%'/>
       </div>
       <div className='exchangeCard'>
        <h3>Exchange Rate</h3>
        <h4>Send money to your loved ones</h4>
        <p>We make sure more of your money goes to those you love, not to high service fees.</p>
        <form >
          <div className='formGroup'>
          <input type='text' id='send' name='send' placeholder='0.00'/>
          <label>You send:</label>
          <div className='dropdown2'>
          <button className='dropdownB' ><img src='https://img.freepik.com/free-vector/illustration-spain-flag_53876-18168.jpg?w=1060&t=st=1682342320~exp=1682342920~hmac=463e1c1083f4aae08988c4846062d52c80dc2670059027b74a71743c97c48fea' height='35' width='40'/></button>
          <div className='dropdownContent'>
          <img src='https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1060&t=st=1682342425~exp=1682343025~hmac=b61180c05d409a31d08cd82f8ca4be1715a1056fc2217e257219fb2f148ba526' height='35' width='40'/>
          <img src='https://img.freepik.com/free-vector/illustration-italy-flag_53876-27098.jpg?w=1060&t=st=1682342513~exp=1682343113~hmac=d570621bd25aeae3f995cf5193ee208de2d82fe62b6002aeda7c601ebc5ce2d3' height='35' width='40'/>
          </div>
          </div> 
          </div> 
          <div className='formGroup'>
          <input type='text' id='send' name='send' placeholder='0.00'/>
          <label>They get:</label>
          <div className='dropdown2'>
          <button className='dropdownB' ><img src='https://img.freepik.com/free-vector/illustration-spain-flag_53876-18168.jpg?w=1060&t=st=1682342320~exp=1682342920~hmac=463e1c1083f4aae08988c4846062d52c80dc2670059027b74a71743c97c48fea' height='35' width='40'/></button>
          <div className='dropdownContent'>
          <img src='https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1060&t=st=1682342425~exp=1682343025~hmac=b61180c05d409a31d08cd82f8ca4be1715a1056fc2217e257219fb2f148ba526' height='35' width='40'/>
          <img src='https://img.freepik.com/free-vector/illustration-italy-flag_53876-27098.jpg?w=1060&t=st=1682342513~exp=1682343113~hmac=d570621bd25aeae3f995cf5193ee208de2d82fe62b6002aeda7c601ebc5ce2d3' height='35' width='40'/>
          </div>
          </div> 
          </div>
        </form>
       </div>

       <div className="divider1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      </section>
      

      <section className='body2'>
        <div>
          <img classname ='mobileImage' src='https://assets-global.website-files.com/634a9930c5b24337cbbac93b/634a9930c5b2438ac6bacb2a_Website_Phone_1376x2688-01%2520(1)-p-500.png' alt='mobile'/>
        </div>
        
       <div className='features'>
          <div className='icons'>
          <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63b0442110dd5747002cabdf_Feature%20Card%201.svg' alt='icon'/>
          <div>
          <h2> Easy to sign up</h2>
          <p>Link your debit card, verify your identity and be sending in minutes.</p>
          </div>
          </div>
          <div className='icons'>
          <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63b04502b337a657c20ee1fb_Feature%20Card%202.svg' alt='icon'/>
          <div>
          <h2> 24/7 support</h2>
          <p>Our phone lines are open 24/7 in multiple languages should you need it.</p>
          </div>
          </div>
          <div className='icons'>
          <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63b045013214e850f987d616_Feature%20Card%203.svg' alt='icon'/>
          <div>
          <h2>Fast and convenient money transfers</h2>
          <p>Skip the line and send money from your phone to your loved ones in seconds.</p>
          </div>
          </div>
          <div className='icons'>
          <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63b044fff897ba1dbed52012_Feature%20Card%204.svg' alt='icon'/>
          <div>
          <h2> Trusted and legitimate</h2>
          <p>Trusted by over 800k user, Sendwave is operated by Chime Inc. and is authorized to transmit money in US, Canada, the UK and the EU.</p>
          </div>
          </div>
          </div>
      </section>

      <section className='body3'>
      <div class="custom-shape-divider-top-1683555079">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
        <h1>
        See what our customers say about Sendwave
      </h1>

      <div class="custom-shape-divider-bottom-1683555362">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
      </section>

      {/* <div>Where you can send Money
      </div> */}

      <section className='body5'>
        <div>
        <h1>Our Story</h1>
        <p>At Sendwave, we're on a mission: to make sure your money gets to your friends and family, as safely and effortlessly as possible.</p>
        <button>Our Story</button>
        </div>
        <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63aff6b2493ff724a471c770_digital-service2%201.png' className='yellowBack' alt='user'/>
      </section>

       <section className='body6'>
        <div className='columnContainer'>       
        <h2>Get started sending money to your loved ones</h2>
        <p>Simply download the app, link your debit card,
           verify yor identity and quickly transfer Moneyto your friends and loved ones. Seriously, it's that simple.</p> 
        <div className='rowContainer'>         
          <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63b00eebb337a6ffb80c6a1f_qr-code-1.png' alt='QR-code'/>
           <div>
          <p>Scan this QR code with your phone to download our app!</p>
          </div>
        </div>  
        </div>         
       </section>
      
        <section className='footer'>
          <div className='withLogo'>
            <img src='https://assets-global.website-files.com/63aacea7fa25cbbb9eb22052/63b019b659086b39a1633adc_Sendwave_Horizontal_Negative_RGB%202.png' alt='logo'/>
            <p >
            © Chime Inc. NMLSChime Inc. DBA Sendwave is licensed as a Money
             Transfer Company licensed by the New York Department of Financial
              Services.
            </p>
          </div>
          <div className='list'>
          <h3>COMPANY</h3>
          <p>
            <a href='#'>Our Story</a><br/>
            <a href='#'>Security</a><br/>
            <a href='#'>Careers </a><br/>
            <a href='#'>Countries</a>
          </p>
          </div>
          <div className='list'>
          <h3>SUPPORT</h3>
          <p>
            <a href='#'>FAQ</a><br/>
            <a href='#'>Contact Us</a><br/>
            <a href='#'>Send Money to the Philippines</a><br/>
            <a href='#'>Send Money to Senegal</a><br/>
            </p>
          </div>
          <div className='list'>
          <h3>LEGAL</h3>
          <p>
            <a href='#'>Customer Complaints </a><br/>
            <a href='#'>Terms and Conditions</a><br/>
            <a href='#'>Privacy Policy</a> <br/>
            <a href='#'>Address: <br/>
            51 Eastcheap London England EC3M 1DT: </a><br/>
          </p>
          </div>
        
        </section>
        
    </div>
  );
}

export default App;
