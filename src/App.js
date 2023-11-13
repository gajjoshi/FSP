import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Imgg from './REC.png'
import km from './lm.png'
import service1 from './s.png'
import service2 from './s1.png'
import service3 from './s3.png'
import teamphoto from './ourteam.png'
import rec2 from './rec2.png'


function App() {
  return (
    <>
      <Navbar />
      <div className="content-container">

      <div className="content">
      <h1>LET'S MAKE YOUR<br /> FILM + TVS SHOWS &<br /> MORE</h1>
      </div>
      </div>

      <div className="hello-text">
      <h1 className='os'>Our Services</h1>
      </div>
      <div className="grid-container">
      <div className="grid-item"><img src={Imgg} alt="" /></div>
      <div className="grid-item"><img src={Imgg} alt="" /></div>
      <div className="grid-item"><img src={Imgg} alt="" /></div>
      </div>




      
      <div className="grid-container2">  
      <button className="grid-item2"><img src={km} alt="" /></button>
      <button className="grid-item2"><img src={km} alt="" /></button>
      <button className="grid-item2"><img src={km} alt="" /></button>
      </div>
<img className="km4" src={service1} alt="" />
<img className="km5" src={service2} alt="" />
<img className="km6" src={service3} alt="" />

      <h3 className="km1">Learn more</h3>
      <h3 className="km2">Learn more</h3>
      <h3 className="km3">Learn more</h3>
      <h1 className='OurTeam'>Our Team</h1>
      <img className="OurTeam2" src={teamphoto} alt="" />
      <img className ="teamphotoback" src={rec2} alt="" />
      <div className='teampara'><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam ad aspernatur excepturi laboriosam dignissimos voluptatum a blanditiis. Dolores sint officia exercitationem molestiae reprehenderit nihil aliquid atque dolorem est iste ut fugit nam, quibusdam eius perferendis saepe esse temporibus, dolorum doloremque. Exercitationem adipisci iusto, assumenda sint numquam expedita ducimus deserunt laudantium totam esse voluptatibus odit incidunt maxime velit ut! Laborum ex laboriosam animi ad dolor perspiciatis commodi. Asperiores, quam tempora. Magni perspiciatis accusamus omnis obcaecati recusandae itaque reprehenderit blanditiis repellat iure totam consequatur tenetur numquam, laudantium nobis neque quidem hic impedit rem ipsam alias debitis adipisci porro! Corporis ratione similique eum ad facere suscipit dolor, soluta vitae tempore hic accusamus officia voluptates, nesciunt laboriosam officiis enim. Consequatur laudantium, quas iste quaerat ea architecto molestiae tempore saepe ratione aperiam ab officia, libero reprehenderit vero veritatis animi quos perspiciatis omnis dolor ipsa delectus autem alias eum. Deserunt dolorum nemo praesentium nisi in.</h3></div>



     

      </>
  );
}

export default App;
