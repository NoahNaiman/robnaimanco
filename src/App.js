import React from 'react';

import allegro from './img/Allegro.png';
import barchartIcon from './img/bar-chart.svg';
import birdcall from './img/bcall.jpg';
import nativeRoots from './img/nativeRoots.jpg';
import brotherBBQ from './img/BrothersBBQ.png';
import buildingIcon from './img/building.svg';
import burgerKing from './img/Burgerking.png';
import cedarAndHolly from './img/cedarandholly.jpg';
import curtisParkDeli from './img/CurtisParkDeli.png';
import dependableCleaners from './img/DependableCleaners.png';
import dominos from './img/Dominos.png';
import eightOneNineteen from './img/801819COBlvd.jpg';
import eightyThirtyOneEastColfax from './img/8031EastColfax.jpg';
import elevenSixNinetySevenColfax from './img/11697EastColfax.jpg';
import envelopeIcon from './img/envelope-icon.svg';
import fifteenThreeTwentyIliff from './img/15320EastIliff.jpg';
import fifteenThirtyFive from './img/1535eevans.jpg';
import fivehundredGrant from './img/500grantstreet.jpg';
import fiveSixtyEightWash from './img/568nwashington.jpg';
import fortyEightThirtyNineEColfax from './img/4839EastColfax.jpg';
import fourThirtyFourTennyson from './img/403440tennyson.jpg';
import fortyTwoTFiftyEColfax from './img/4250WestColfax.jpeg';
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
import parkburger from './img/parkburger.jpg';
import parkBurgerLogo from './img/ParkBurger.png';
import pencil from './img/pencil.jpg';
import personIcon from './img/user.svg';
import phoneIcon from './img/phone-solid.svg';
import robImage from './img/Rob-Headshot.jpg';
import thirteenOthreeEast from './img/1303east6th.jpg';
import thirtyEightSheridan from './img/3800sheridan.jpg';
import thirtyFiveLarimer from './img/3500larimer.jpg';
import thirtyFourLarimer from './img/3463larimer.jpg';
import trophyIcon from './img/trophy.svg';
import twentyFiveSixty from './img/2560shavana.jpg';
import twentyOneOOne from './img/2101sdowning.jpg';
import twentyOneSixtyThree from './img/216328boulder.jpg';
import twentySevenESixth from './img/2700e6th.jpg';
import seventyFiveHundredPecos from './img/7500Pecos.jpeg';
import sixthAndGrant from './img/6thandgrant.jpg';
import sixtyFourNinNineLeets from './img/6499Leetsdale.jpg';
import sixtyThreeHundredEast from './img/6300East14th.jpg';
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
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href="#WhoAreWe">Who Are We</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" href="#OurProperties">Our Properties</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4" href="#ContactUs">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        <header className="App-header">
            <Image src={pencil} fluid />
        </header>
        <Jumbotron fluid id="WhoAreWe">
            <Container>
                <h1 id="Whom-Title">Who Are We</h1>
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
                        We are proud to have leased the first location to businesses who went on to great success, growth and expansion. These companies include Qdoba Mexican Eats, Fruition Restaurant, Brother's BBQ, and High Point Creamery among others. We know how to spot potential successes and welcome the opportunity to work with both startup retail businesses and national chains alike.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

		<Image src={parkburger} className="Parkburger-Jumbo" fluid/>		
         <Figure className="Tenant-Icon">		
             <Figure.Image		
                 width={171}		
                 height={180}		
                 alt="171x180"		
                 src={personIcon}		
             />		
             <Figure.Caption style={{color:'white'}}>		
                 <strong>125</strong> <br></br> Tenants		
             </Figure.Caption>		
         </Figure>		
         <Figure className="Awards-Icon" style={{'marginTop':'-105% !important'}}>		
             <Figure.Image		
                 width={171}		
                 height={180}		
                 alt="171x180"		
                 src={trophyIcon}		
             />		
             <Figure.Caption style={{color:'white'}}>		
                 <strong>6</strong> <br></br> Awards		
             </Figure.Caption>		
         </Figure>

    	<br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br>

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
        <br id="OurProperties"></br><br></br>
        <hr></hr>
        <br></br>
        <h1 style={{'textAlign':'center'}}>Our Properties</h1>
        <br></br><br></br>
        <CardColumns style={{height: "100%", width: "100%"}}>

                <Card style={{height: "15rem"}}>
                    <div className="Image-Overlay">
                    <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                        <Card.Title>211 S Holly St. Denver, CO.</Card.Title>
                        <Card.Text>
Prosperous Hilltop/Crestmoor/Lowry neighborhood location, home to Park Burger, High Point Creamery and a soon to be anounced third restaurant.
                        </Card.Text>
                    </Card.ImgOverlay>
                    <Card.Img className="Property-Image" src={cedarAndHolly} alt="211 S Holly St. Denver, CO." />
                    </div>
                </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>500 Grant St. Denver, CO.</Card.Title>
                    <Card.Text>
Fantastic Capitol Hill/Alamo Placita/Country Club neighborhood location, home to Native Roots Dispensary.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={nativeRoots} alt="500 Grant St. Denver, CO." />
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>606 Peoria St. Aurora, CO.</Card.Title>
                    <Card.Text>
Expanding Fitzsimons/Hoffman Heights neighborhood location, home to Mobile One Cellular. Now Available: Approximately 5,000 square foot 6-bay automotive facility. 
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={sixOSixPeoria} alt="606 Peoria St. Aurora, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>990 West 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
 Bustling Baker/Lincoln Park/Capitol Hill neighborhood location, home to LaMar’s Donuts, Riverrock Dispensary, Diamond Nails, Kalamath Liquors and Thai Curry Café.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={nineNinetyWest} alt="990 West 6th Ave. Denver, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentyOneOOne} alt="2101 S Downing St. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>2101 S Downing St. Denver, CO.</Card.Title>
                    <Card.Text>
Booming University of Denver/University Park neighborhood location, home to Domino’s Pizza.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentySevenESixth} alt="2700 East 6th Ave. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>2700 East 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Prosperous Cherry Creek/Country Club neighborhood location, home to Curtis Park Deli and Thai Nail Salon.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirtyEightSheridan} alt="3800 Sheridan Blvd. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>3800 Sheridan Blvd. Denver, CO.</Card.Title>
                    <Card.Text>
Burgeoning Berkeley/West Highlands/Wheatridge neighborhood, location home to Midas. 
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fortyEightThirtyNineEColfax} alt="4839 East Colfax Ave. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>4839 East Colfax Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Eclectic City Park/ South Park Hill/ Hale/Montclair neighborhood. Coming Soon: A new Neapolitan pizza restaurant/Italian beer garden with Bocce ball courts!
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={seventyFiveHundredPecos} alt="7500 Pecos Street. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>7500 Pecos Street. Denver, CO.</Card.Title>
                    <Card.Text>
Western Hills/Twin Lakes neighborhood location, with immediate Denver/Boulder Turnpike access and home to Big O Tires.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fifteenThreeTwentyIliff} alt="15320 E Iliff Ave. Aurora CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>15320 E Iliff Ave. Aurora CO.</Card.Title>
                    <Card.Text>
Convenient Meadow Hills/Southeast Crossing neighborhood location, home to Big O Tires.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>300 E 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Vibrant Capitol Hill/Alamo Placita/Country Club neighborhood location, home to Starbucks, Le Bakery Sensual, Bluemoon Floral and Little Star Mart.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={sixthAndGrant} alt="300 E 6th Ave. Denver, CO." />
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>550 Grant St. Denver, CO.</Card.Title>
                    <Card.Text>
Bustling Capitol Hill/Alamo Placita/Country Club neighborhood location, home to Qdoba Mexican Eats. Yogurtland, Cosmo’s Pizza and Snappy Nails. Now Available: Approximately 859 square feet.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={fivehundredGrant} alt="550 Grant St. Denver, CO." />
                </div>
            </Card>
            
            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>801-819 Colorado Blvd. Denver, CO.</Card.Title>
                    <Card.Text>
Flourishing Congress Park/Cherry Creek/Hilltop neighborhood location, home to Starbucks Coffee, Canvas Credit Union, Bar Car Tavern, Edward Jones Financial and Erawan Thai Café.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={eightOneNineteen} alt="801-819 Colorado Blvd. Denver, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>1303-1313 East 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
 Flourishing Capitol Hill/Alamo Placita/Country Club neighborhood location, home to Fruition Restaurant. Available: Retail/Office and living spaces. 
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={thirteenOthreeEast} alt="1303-1313 East 6th Ave. Denver, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentyOneSixtyThree} alt="2163 28th St. Boulder, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>2163 28th St. Boulder, CO.</Card.Title>
                    <Card.Text>
Flourishing University of Colorado/Central Boulder neighborhood location, home to Meineke Muffler.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirtyFourLarimer} alt="3463 Larimer St. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>3463 Larimer St. Denver, CO.</Card.Title>
                    <Card.Text>
Exciting RINO/Curtis Park neighborhood location, home to the Embassy Tavern.Located in the ever-changing RiNo neighborhood, this 1910 era building is seeing new life with The Embassy Tavern.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fourThirtyFourTennyson} alt="4034-4040 Tennyson St. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>4034-4040 Tennyson St. Denver, CO.</Card.Title>
                    <Card.Text>
Vibrant Berkeley/West Highlands/Wheatridge neighborhood location, home to Allegro Coffee and Il Porcellino Salumi.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={sixtyThreeHundredEast} alt="6300 East 14th Ave. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>6300 East 14th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
South Park Hill/Hale/Montclair neighborhood location, home to Conoco Gas and Service Center.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={eightyThirtyOneEastColfax} alt="8031 East Colfax Ave. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>8031 East Colfax Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Growing Stapleton/South Park Hill/Lowry neighborhood location, home to Domino’s Pizza.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{background: "grey", height: "15rem", textAlign: "center"}}>
                <Card.Title>Coming Soon!</Card.Title>
            </Card>

			<Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>330 E 6th Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Thriving Capitol Hill/Alamo Placita/Country Club neighborhood location, home to Little India Restaurant.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={littleIndia} alt="330 E 6th Ave. Denver, CO." />
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>568 N Washington St. Denver, CO.</Card.Title>
                    <Card.Text>
 Rare Capitol Hill/Alamo Placita/Country Club neighborhood location, home to Brother’s BBQ Restaurant.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={fiveSixtyEightWash} alt="568 N Washington St. Denver, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>900-918 16th St. Denver, CO.</Card.Title>
                    <Card.Text>
                    Busy Central Business District location, 12-story mixed-use office above retail, home to multiple tenants.                    
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={nineTenSixteen} alt="900-918 16th St. Denver, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>1535 E Evans Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Booming University of Denver/University Park neighborhood location, home to Birdcall Restaurant.
                    </Card.Text>
                </Card.ImgOverlay>
                <Card.Img className="Property-Image" src={fifteenThirtyFive} alt="1535 E Evans Ave. Denver, CO."/>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={twentyFiveSixty} alt="2560 S Havana St. Aurora, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}} >
                    <Card.Title>2560 S Havana St. Aurora, CO.</Card.Title>
                    <Card.Text>
Thriving Kennedy Golf Course/ Dam East /West neighborhood location, home to Burger King.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={thirtyFiveLarimer} alt="3500 Larimer St. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>3500 Larimer St. Denver, CO.</Card.Title>
                    <Card.Text>
Electrifying RINO/Curtis Park neighborhood location, home to Hop Alley Restaurant, Chalk Media and Paloma Dental.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={fortyTwoTFiftyEColfax} alt="4250 West Colfax Ave. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>4250 West Colfax Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Growing Sloan’s Lake/West Colfax neighborhood and home to Big Daddy’s Pizza.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={sixtyFourNinNineLeets} alt="6499 Leetsdale Drive. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>6499 Leetsdale Drive. Denver, CO.</Card.Title>
                    <Card.Text >
Busy Hilltop/Crestmoor/Winston Downs/Virginia Vale neighborhood location, home to Denver’s first Brother’s BBQ restaurant.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{height: "15rem"}}>
                <div className="Image-Overlay">
                <Card.Img className="Property-Image" src={elevenSixNinetySevenColfax} alt="11697 East Colfax Ave. Denver, CO."/>
                <Card.ImgOverlay className="Location-Description" style={{marginTop: "21%"}}>
                    <Card.Title>11697 East Colfax Ave. Denver, CO.</Card.Title>
                    <Card.Text>
Thriving Fitzsimons/Hoffman Heights neighborhood, home to Top Pho restaurant.
                    </Card.Text>
                </Card.ImgOverlay>
                </div>
            </Card>

            <Card style={{background: "grey", height: "15rem", textAlign: "center"}}>
                <Card.Title>Coming Soon!</Card.Title>
            </Card>

        </CardColumns>

        <Image src={mayorAward} className="Mayor-Award-Jumbo" fluid/>
        <br></br><br></br>
        <hr></hr>
        <br></br>
        <h1 style={{'textAlign':'center'}}>A Sampling of Our Tenants</h1>

        <br></br><br></br>

        <Carousel interval={2000}>
            <Carousel.Item>
                <img
                    src={allegro}
                    alt="Allegor Coffe Roasters"
                    style={{marginLeft: "5%", height: "30%", width: "30%"}}
                />
                <img
                    src={birdcall}
                    alt="Birdcall"
                    style={{height: "30%", width: "30%"}}
                />
                <img
                    src={brotherBBQ}
                    alt="Brothers BBQ"
                    style={{height: "30%", width: "30%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={burgerKing}
                    alt="Burger King"
                    style={{marginLeft: "5%", height: "30%", width: "30%"}}
                />
                <img
                    src={curtisParkDeli}
                    alt="Curtis Park Deli"
                    style={{height: "30%", width: "30%"}}
                />
                <img
                    src={dependableCleaners}
                    alt="Dependable Cleaners"
                    style={{height: "30%", width: "30%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={dominos}
                    alt="Dominos Pizza"
                    style={{marginLeft: "5%", height: "30%", width: "30%"}}
                />
                <img
                    src={fruition}
                    alt="Fruition Restaurant"
                    style={{height: "30%", width: "30%"}}
                />
                <img
                    src={highPoint}
                    alt="HighPoint Creamery"
                    style={{height: "30%", width: "30%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={hopAlley}
                    alt="Hop Alley Restauarant"
                    style={{marginLeft: "5%", height: "30%", width: "30%"}}
                />
                <img
                    src={ilPorcelino}
                    alt="Il Porcellino"
                    style={{height: "30%", width: "30%"}}
                />
                <img
                    src={lamars}
                    alt="Lamar's Donuts"
                    style={{height: "30%", width: "30%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={leBakery}
                    alt="Le Bakery Sensual"
                    style={{marginLeft: "5%", height: "30%", width: "30%"}}
                />
                <img
                    src={moes}
                    alt="Moe's Bagels"
                    style={{height: "30%", width: "30%"}}
                />
                <img
                    src={paloma}
                    alt="Paloma Dental"
                    style={{height: "30%", width: "30%"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={parkBurgerLogo}
                    alt="Park Burger"
                    style={{marginLeft: "5%", height: "30%", width: "30%"}}
                />
                <img
                    src={qdoba}
                    alt="Qdoba"
                    style={{height: "30%", width: "30%"}}
                />
                <img
                    src={yogurtland}
                    alt="Yogurtland"
                    style={{height: "30%", width: "30%"}}
                />
            </Carousel.Item>
        </Carousel>
        <Jumbotron fluid id="ContactUs">
            <Container>
                <h1 style={{'textAlign':'center'}}>Get In Touch</h1>
                <br></br><br></br>

                <CardColumns style={{'marginLeft': '30%'}}> 
                    <Card style={{'background': 'none', 'border': '0px'}}> 
                        <Card.Img className="Team-Image" src={nikkiAndRob} alt="Robert & Nikki Naiman" style={{'width': '252px', 'height': '335px'}}/>
                    </Card>

                    <Card style={{'background': 'none', 'border': '0px', 'marginLeft': '15%'}}> 
                        <Card.Img className="Contact-Icon" src={phoneIcon} alt="Phone-Icon" style={{'width': '42px', 'height': '45px'}}/>
                        <Figure.Caption style={{color:'black'}}>
                            <p>(303) 534-5929</p>
                        </Figure.Caption>

                        <Card.Img className="Contact-Icon" src={envelopeIcon} alt="Envelope-Icon" style={{'width': '42px', 'height': '45px'}}/>
                        <Figure.Caption style={{color:'black'}}>
                            <p> <a href="mailto:nikki@robnaimanco.com"> nikki@robnaimanco.com </a></p>
                        </Figure.Caption>

                        <Card.Img className="Contact-Icon" src={mapMarker} alt="Map-Marker-Icon" style={{'width': '42px', 'height': '45px'}}/>
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
