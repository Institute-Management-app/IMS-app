import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Pic from './images/adm.jpg';
import ele from './images/ele.jpg';
import mec from './images/mec.jpg';
import ce from './images/ce.jpg'
import caro1 from './images/col.jpg'
import caro2 from './images/sports.jpg'
import caro3 from './images/caro3.jpg'
import intro from './images/intro.jpg'
import './home.css';
import logo from './images/lg1.jpg'



function App() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
    <div id='home' className="container8">
    <img src={logo}/>
    <Link to={"/accounts/login"} className="btn btn-primary btn-lg">Login</Link>
  </div>


  <Navbar className={colorChange ? 'navbar colorChange bg-dark navbar-expand-sm sticky-top nav' : 'navbar'}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: '100px',marginLeft: '13vw' }}
              navbarScroll
            >
              <Nav.Link id='gq' className='nav1' href="#home">HOME</Nav.Link>
              
              <NavDropdown className='nav1' title="DEPARTMENTS" id='gq'>
                <NavDropdown.Item href="#dept">Civil Engineering</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Electrical Engineering</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#dept">Mechnical Engineering</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='nav1' title="INFRASTRUCTURE" id="gq">
                <NavDropdown.Item href="#">Office</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Central Library</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Labs</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Confrence & Seminar Halls</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Canteen</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Hostel</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='nav1' title="PLACEMENT" id="gq">
                <NavDropdown.Item href="#placement">Major Recruiters</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#placement">Placement Statics</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown className='nav1' title="ADMISION" id="gq">
                <NavDropdown.Item href="#admision">B.Tech Admissions</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#admision">M.Tech Admissions Upcoming</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id='gq' className='nav1' href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <div className='caro' >
    <Carousel fade>
      <Carousel.Item>
        <img width={1535} height={600} className="d-block" src={caro1} style={{backgroundSize:'contain'}}alt="First slide"/>
        <Carousel.Caption>
          <h3>"SCIENCE" , the poetry of reality...</h3>
          <p>Most institutions demand unqualified faith but the institution of science makes skepticism a virtue....!!!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img width={1535} height={600} className="d-block " src={caro3}style={{backgroundSize:'cover'}} alt="Second slide"/>
        <Carousel.Caption>
          <h3>Progress through education</h3>
          <p>To seek, strive for and scale greater heights of quality education</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img width={1535} height={600} className="d-block "src={caro2} alt="Third slide"/>
        <Carousel.Caption>
          <h3>“Game of inches”</h3>
          <p>College athletics encompasses non-professional, collegiate and university-level competitive sports and games</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <div className='box'>
      <Card style={{width:"1300px", flexDirection:'row', padding:'10px'}} >
        <Card.Img src={intro} style={{width:"500px"}} />
        <Card.Body className='about'>
          <h2 style={{marginLeft:'330px', color:'red', fontWeight:'bold'}}>About</h2>
          <Card.Text style={{textAlign:'justify'}}>MyEdu Institute is a state-of-the-art engineering college conforming to international standards. This model engineering college is approved by AICTE vide approval NO./06/ KER/ENGG/2002/91 dated 12/05/03 and affiliated to APJ Abdul Kalam Technological University. In few years MyEdu has evolved and achieved recognition as a notable School of Engineering with its competent and committed faculty, high quality infrastructure and high technology teaching aids, and by providing a serene atmosphere that complements academic life. 
          </Card.Text>
          <Card.Text style={{textAlign:'justify'}}>MyEdu has a holistic approach to education where academic training goes hand in hand with offerings that develop the body,mind and soul to prepare its graduates to be future leaders. By being one of the best B. Tech colleges in Kerala, we strongly believe that successful engineering education needs advanced technologies that are currently emerging across the world.  If you wish to join the latest and best engineering courses , My Edu is here with the advanced technology courses that have a great demand in the global market.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
   
    <div id='dept' className='cards'>
    <div className='shade'>
      <Card className='card'>
        <Card.Img variant="top" src={ce} style={{backgroundSize:'cover',width: "300px", minHeight: '200px'}}/>
        <Card.Body>
          <Card.Title>B.Tech</Card.Title>
          <Card.Text>CIVIL ENGINEERING</Card.Text>
          <Card.Text>Annual Intake: 120 seats</Card.Text>
          <Button style={{marginLeft:'75px'}} variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
      <Card >
        <Card.Img variant="top" src={mec} style={{backgroundSize:'cover', maxwidth: "355px", minHeight: '200px'}} />
        <Card.Body>
        <Card.Title>B.Tech</Card.Title>
          <Card.Text>MECHANICAL ENGINEERING</Card.Text>
          <Card.Text>Annual Intake: 120 seats</Card.Text>
          <Button style={{marginLeft:'75px'}} variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ele} style={{backgroundSize:'cover', maxwidth: "300px", maxHeight: '180px'}} />
        <Card.Body>
        <Card.Title>B.Tech</Card.Title>
          <Card.Text>ELECTRICAL & ELECTRONICS ENGINEERING</Card.Text>
          <Card.Text>Annual Intake: 60 seats</Card.Text>
          <Button style={{marginLeft:'75px'}} variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
      </div>    </div>   
    
    <div id='placement' className='placement'>
    <Card className="bg-dark text-white place" >
      <Card.Img className='image' style={{borderRadius:"10px"}}/>
      <Card.ImgOverlay>
        {/* <div className='center'>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
        </div> */}
      </Card.ImgOverlay>
    </Card>
    </div>

    <div id='admision' className='admision'>
      <Card className='ad'style={{borderRadius:"10px"}}>
        <Card.Img variant="top" src={Pic} style={{backgroundSize:'cover',height: "400px", width: "1300px"}}/>
        <Card.Body>
          <Card.Text style={{marginLeft:'250px'}}>Admissions to B.Tech Programmes are strictly based on merit through Govt. Quota and Management Quota</Card.Text>
        </Card.Body>
      </Card>
      <br />
      </div>

      <div id='contact' className="bottle">
        <div className="container1">
           <h6>ACADEMICS</h6>
           <hr/>
           <p>Dept. of Civil Engineering</p>
           <p> Dept. of Electrical Engineering</p>
           <p>Dept. of Mechnical Engineering</p>
        </div>
        <div className="container1">
            <h6>USEFUL LINKS</h6>
            <hr/>
            <p>B.Tech Admissions</p>
            <p>M.Tech Admissions Upcoming</p>
            <p>Administrative Office</p>
            <p>Placement Statistics</p>
        </div>
        <div className="container1">
            <h6>CONTACT US</h6>
            <hr/>
            <p>MyEdu Institute, Kerala, India.</p>
            <p>General Contacts<br/>
                Email: admin@admin.edu<br/>
                Phone: +91 484 - 2911111 / 2911507<br/>
                Fax: +91 484 - 2532862</p>
        </div>
    </div>
      </>
  );
}

export default App;
