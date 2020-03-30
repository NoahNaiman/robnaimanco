import React from 'react';

import barchartIcon from './bar-chart.svg';
import buildingIcon from './building.svg';
import handshakeIcon from './handshake.svg';
import logoWhite from './logo_white.png';
import parkburger from './parkburger.jpg';
import pencil from './pencil_shot.png';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
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
        <div className="Tenant-Numbers">
            <Image src={parkburger} fluid/>
        </div>
    </div>
  );
}

export default App;