import React from 'react';

import allegro from './img/Allegro.png';
import barchartIcon from './img/bar-chart.svg';
import birdcall from './img/bcall.jpg';
import bostonMarket from './img/bostonmarket.jpg';
import brotherBBQ from './img/BrothersBBQ.png';
import buildingIcon from './img/building.svg';
import burgerKing from './img/Burgerking.png';
import cedarAndHolly from './img/cedarandholly.jpg';
import curtisParkDeli from './img/CurtisParkDeli.png';
import dependableCleaners from './img/DependableCleaners.png';
import dominos from './img/Dominos.png';
import eightOneNineteen from './img/801819COBlvd.jpg';
import envelopeIcon from './img/envelope-icon.svg';
import fifteenThirtyFive from './img/1535eevans.jpg';
import fivehundredGrant from './img/500grantstreet.jpg';
import fiveSixtyEightWash from './img/568nwashington.jpg';
import fourThirtyFourTennyson from './img/403440tennyson.jpg';
import fruition from './img/Fruition.png';
import handshakeIcon from './img/handshake.svg';
import highPoint from './img/HighPoint.png';
import hopAlley from './img/HopAlley.png';
import ilPorcelino from './img/ilPorcellino.png';
import lamars from './img/lamars.jpg';
import leBakery from './img/Lebakery.png';
import littleIndia from './img/littleindia.jpg';
import logoWhite from './img/logo_white.png';
import mapMarker from './img/map-marker.svg'
import mayorAward from './img/mayoraward.jpeg';
import moes from './img/Moes.png';
import nikkiAndRob from './img/nikkiAndRob.jpg';
import nikkiImage from './img/Nikki-Headshot.jpg';
import nineNinetyWest from './img/990west6th.jpg';
import nineTenSixteen from './img/91016th.jpg';
import paloma from './img/Paloma.png';
import parkBurgerLogo from './img/ParkBurger.png';
import pencil from './img/pencil_shot.png';
import phoneIcon from './img/phone-solid.svg';
import robImage from './img/Rob-Headshot.jpg';
import thirteenOthreeEast from './img/1303east6th.jpg';
import thirtyEightSheridan from './img/3800sheridan.jpg';
import thirtyFiveLarimer from './img/3500larimer.jpg';
import thirtyFourLarimer from './img/3463larimer.jpg';
import twentyFiveSixty from './img/2560shavana.jpg';
import twentyOneOOne from './img/2101sdowning.jpg';
import twentyOneSixtyThree from './img/216328boulder.jpg';
import twentySevenESixth from './img/2700e6th.jpg';
import sixthAndGrant from './img/6thandgrant.jpg';
import sixOSixPeoria from './img/606peoria.jpg';
import qdoba from './img/Qdoba.png';
import yogurtland from './img/Yogurtland.png';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Nav className="Navbar" variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Image src={logoWhite} fluid className="Navbar-logo"/>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Who Are We</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Our Properties</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Map of Properties</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        <header className="App-header">
            <Image src={pencil} fluid />
        </header>
        <Jumbotron fluid>
            <Container>
                <h1 className="Whom-Title">Who Are We</h1>
                    <p></p>
                    <p>
                        The Robert L. Naiman Company, LLC, is a privately owned real estate firm based in Denver, Colorado, focused on the acquisition, development and management of commercial in-fill properties.
                    </p>
                    <p>
                        Our goal is to deliver quality projects that support the entrepreneurial endeavors of our tenants and contribute to the communities in which they are located.
                    </p>
                    <p>
                        Our properties are located throughout metropolitan Denver’s most desirable neighborhoods. Each property occupies a corner site, at a key intersection, affording our tenants maximum visibility and access. We offer new and growing businesses various operating formats including: retail (freestanding, in-line and drive-thru) restaurant/tavern, automotive, office, and mixed-use.
                    </p>
                    <p>
                        The Denver Metropolitan Commercial Association of Realtors (DMCAR) and The Denver Business Journal have twice named The Robert L. Naiman Company, LLC, Retail Landlord of The Year.
                    </p>
                    <p>
                        For leasing inquiries or to present new acquisition opportunities, please call or email Nikki Naiman at nikki@robnaimanco.com.
                    </p>
            </Container>
        </Jumbotron>
        <CardDeck className="About-Card">
            <Card>
                <Card.Img variant="top" src={handshakeIcon} className="About-Icon"/>
                <Card.Body>
                    <Card.Title>Aquisitions</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        The Robert L. Naiman Company, LLC invests in retail and office properties throughout the Denver Metropolitan area and other strategic markets.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={buildingIcon} className="About-Icon"/>
                <Card.Body>
                    <Card.Title>Retail & Office Leasing</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        The Robert L. Naiman Company, LLC has over 40 years of experience and a vast understanding of retail and office leasing. We work directly with new and existing business owners to skillfully navigate project management and guarantee a successful tenant-landlord relationship.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={barchartIcon} className="About-Icon"/>
                <Card.Body>
                    <Card.Title>Grow Your Business</Card.Title>
                    <hr></hr>
                    <Card.Text>
                        We are proud to have leased the first location to businesses who went on to great success, growth and expansion. These companies include Qdoba Mexican Eats, Fruition Restaurant, Brother's BBQ and High Point Creamery among others. We know how to spot potential successes and welcome the opportunity to work with both mom and pop retail businesses and national chains alike.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <Figure className="Rob-Image">
            <Figure.Image
                width={400}
                height={437}
                alt="400x437"
                src={robImage}
            />
            <Figure.Caption style={{color:'#0384fc'}}>
               Robert L. Naiman
            </Figure.Caption>
            <Figure.Caption style={{color:'grey', 'fontSize': 'calc(3px + 2vmin)'}}>
                Founding Principial & Managing Partner
            </Figure.Caption>
            <Figure.Caption style={{color:'black', 'fontSize': 'calc(3px + 2vmin)'}}>
                rob@robnaimanco.com
            </Figure.Caption>
        </Figure>
        <Figure className="Nikki-Image">
            <Figure.Image
                width={400}
                height={437}
                alt="400x437"
                src={nikkiImage}
            />
            <Figure.Caption style={{color:'#0384fc'}}>
               Nikki A. Naiman
            </Figure.Caption>
            <Figure.Caption style={{color:'grey', 'fontSize': 'calc(3px + 2vmin)'}}>
                Partner & Leasing Director
            </Figure.Caption>
            <Figure.Caption style={{color:'black', 'fontSize': 'calc(3px + 2vmin)'}}>
                nikki@robnaimanco.com
            </Figure.Caption>
        </Figure>
        <br></br><br></br>
        <hr></hr>
        <br></br>
        <h1 style={{'textAlign':'center'}}>Our Properties</h1>
        <br></br><br></br>
        <CardColumns>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={cedarAndHolly} alt="211 S Holly St. Denver, CO." />
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>211 S Holly St. Denver, CO.</Card.Title>
                    <Card.Text>
Former gas station site redeveloped in 2013 and now home to Park Burger, Novo Coffee, and the original High Point Creamery.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={sixthAndGrant} alt="300 E 6th Ave. Denver, CO." />
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>300 E 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
One of four buildings making up a 3/4 block assemblage and home to Starbucks, Le Bakery Sensual, Blue Moon Floral and Little Star Mart.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={littleIndia} alt="330 E 6th Ave. Denver, CO." />
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>330 E 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
One of four buildings making up a 3/4 block assemblage and home to Little India.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={bostonMarket} alt="500 Grant St. Denver, CO." />
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>500 Grant St. Denver, CO.</Card.Title>
                    <Card.Text>
One of four buildings making up a 3/4 block assemblage and soon to be home to Native Roots Cannabis Co.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fivehundredGrant} alt="550 Grant St. Denver, CO." />
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>550 Grant St. Denver, CO.</Card.Title>
                    <Card.Text>
One of four buildings making up a 3/4 block assemblage and home to the first ever Qdoba Mexican Eats, Dependable Cleaners, Moe's Broadway Bagels, Yogurtland and Snappy Nails.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fiveSixtyEightWash} alt="568 N Washington St. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>568 N Washington St. Denver, CO.</Card.Title>
                    <Card.Text>
 Former convenience store transformed into Brother's BBQ.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={sixOSixPeoria} alt="606 Peoria St. Aurora, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>606 Peoria St. Aurora, CO.</Card.Title>
                    <Card.Text>
Approximately 6,847 square foot 6 bay automotive repair facility on 6th Avenue and Peoria Street. 
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={eightOneNineteen} alt="801-819 Colorado Blvd. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>801-819 Colorado Blvd. Denver, CO.</Card.Title>
                    <Card.Text>
Convenience retail center and home to Starbucks, Canvas Credit Union, The Erawan Café, Edward Jones and Bar Car Tavern.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={nineTenSixteen} alt="910-918 16th St. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>910-918 16th St. Denver, CO.</Card.Title>
                    <Card.Text>
One of a kind 12 story mixed use building at 16th and Champa Streets at the Center of Denver's 16th 16th Street Mall.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={nineNinetyWest} alt="990 West 6th Ave. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>990 West 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
 6,220 square foot retail center built in 1999 and home to LaMars Donuts, RiverRock, Diamond Nail Spa, Thai Curry Cuisine and Kalamath Liquor.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirteenOthreeEast} alt="1303-1313 East 6th Ave. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>1303-1313 East 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
 In the Denver Country Club Neighborhood sits this 3,555 square foot retail strip, home to Trout’s Fly Fishing and the award winning Fruition Restaurant. 
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fifteenThirtyFive} alt="1535 E Evans Ave. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>1535 E Evans Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Former Hamburger Stand restaurant transformed into Birdcall, the latest concept from the people behind Park Burger. 
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentyOneOOne} alt="2101 S Downing St. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>2101 S Downing St. Denver, CO.</Card.Title>
                    <Card.Text>
Located in the active University of Denver neighborhood and home to Domino's Pizza.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentyOneSixtyThree} alt="2163 28th St. Boulder, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>2163 28th St. Boulder, CO.</Card.Title>
                    <Card.Text>
1950's 3 bay automotive repair facility and home to Meineke Muffler.in Boulder Colorado 
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentyFiveSixty} alt="2560 S Havana St. Aurora, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>2560 S Havana St. Aurora, CO.</Card.Title>
                    <Card.Text>
Leased to Burger King Corporation.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentySevenESixth} alt="2700 East 6th Ave. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>2700 East 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Located in the Vibrant Cherry Creek North Neighborhood and home to Curtis Park Delicatessen and Thai Nails.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirtyFourLarimer} alt="3463 Larimer St. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>3463 Larimer St. Denver, CO.</Card.Title>
                    <Card.Text>
Located in the ever-changing RiNo neighborhood, this 1910 era tavern is seeing new life with The Embassy Tavern.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirtyFiveLarimer} alt="3500 Larimer St. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>3500 Larimer St. Denver, CO.</Card.Title>
                    <Card.Text>
Located in the thriving RiNo neighborhood, this building is home to the critically acclaimed Hop Alley Restaurant, Chalk Marketing and Paloma Dental.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirtyEightSheridan} alt="3800 Sheridan Blvd. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>3800 Sheridan Blvd. Denver, CO.</Card.Title>
                    <Card.Text>
Home to Pep Boys Auto Service.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
            <Card>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fourThirtyFourTennyson} alt="4034-4040 Tennyson St. Denver, CO."/>
                <Card.ImgOverlay style={{'marginTop':'30%', 'color': 'white'}}>
                    <Card.Title>4034-4040 Tennyson St. Denver, CO.</Card.Title>
                    <Card.Text>
Located in Denver's Berkley neighborhood and home to Allegro Coffee and Il Porcelino Salumi.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>
        </CardColumns>
        <Image src={mayorAward} className="Mayor-Award-Jumbo" fluid/>
        <br></br><br></br>
        <hr></hr>
        <br></br>
        <h1 style={{'textAlign':'center'}}>A Sampling of Our Tenants</h1>
        <br></br><br></br>
        <Carousel>
            <Carousel.Item>
                <img
                    src={allegro}
                    alt="Allegor Coffe Roasters"
                />
                <img
                    src={birdcall}
                    alt="Birdcall"
                    style={{marginLeft: '4%'}}
                />
                <img
                    src={brotherBBQ}
                    alt="Brothers BBQ"
                    style={{marginLeft: '3%'}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={burgerKing}
                    alt="Burger King"
                />
                <img
                    src={curtisParkDeli}
                    alt="Curtis Park Deli"
                />
                <img
                    src={dependableCleaners}
                    alt="Dependable Cleaners"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={dominos}
                    alt="Dominos Pizza"
                />
                <img
                    src={fruition}
                    alt="Fruition Restaurant"
                />
                <img
                    src={highPoint}
                    alt="HighPoint Creamery"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={hopAlley}
                    alt="Hop Alley Restauarant"
                    style={{marginLeft: '2%'}}
                />
                <img
                    src={ilPorcelino}
                    alt="Il Porcellino"
                    style={{marginLeft: '5%'}}
                />
                <img
                    src={lamars}
                    alt="Lamar's Donuts"
                    style={{marginLeft: '8%'}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={leBakery}
                    alt="Le Bakery Sensual"
                />
                <img
                    src={moes}
                    alt="Moe's Bagels"
                    style={{marginLeft: '-2%'}}
                />
                <img
                    src={paloma}
                    alt="Paloma Dental"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={parkBurgerLogo}
                    alt="Park Burger"
                    style={{marginLeft: '-1%'}}
                />
                <img
                    src={qdoba}
                    alt="Qdoba"
                />
                <img
                    src={yogurtland}
                    alt="Yogurtland"
                />
            </Carousel.Item>
        </Carousel>
        <Jumbotron fluid>
            <Container>
                <h1 style={{'textAlign':'center'}}>Get In Touch</h1>
                <br></br><br></br>

                <CardColumns style={{'margin-left': '30%'}}> 
                    <Card style={{'background': 'none', 'border': '0px'}}> 
                        <Card.Img className="Team-Image" src={nikkiAndRob} alt="Robert & Nikki Naiman" style={{'width': '252px', 'height': '335px'}}/>
                    </Card>

                    <Card style={{'background': 'none', 'border': '0px', 'margin-left': '15%'}}> 
                        <Card.Img classname="Contact-Icon" src={phoneIcon} alt="Phone-Icon" style={{'width': '42px', 'height': '45px'}}/>
                        <Figure.Caption style={{color:'black'}}>
                            <p>(303) 534-5929</p>
                        </Figure.Caption>

                        <Card.Img classname="Contact-Icon" src={envelopeIcon} alt="Envelope-Icon" style={{'width': '42px', 'height': '45px'}}/>
                        <Figure.Caption style={{color:'black'}}>
                            <p> <a href="mailto:nikki@robnaimanco.com"> nikki@robnaimanco.com </a></p>
                        </Figure.Caption>

                        <Card.Img classname="Contact-Icon" src={mapMarker} alt="Map-Marker-Icon" style={{'width': '42px', 'height': '45px'}}/>
                        <Figure.Caption style={{color:'black'}}>
                            <p>910 16th St, Suite 500 Denver,CO</p>
                        </Figure.Caption>
                    </Card>
                </CardColumns>
            </Container>
        </Jumbotron>
    </div>
  );
}

export default App;
