import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import './custom.scss'

const menu = [
  {
    name: 'About',
    linkedid: 'about'
  },
  {
    name: 'Projects',
    linkedid: 'projects'
  },
  {
    name: 'Downloads',
    linkedid: 'downloads'
  },
  {
    name: 'Contact',
    linkedid: 'contact'
  },
]

const reactProjects = [
  {
    name: 'React CMS',
    img: [
      './assets/CMS_1.png',
      './assets/CMS_2.png',
      './assets/CMS_3.png',
      './assets/CMS_4.png',
    ],
    keyTech: 'React, React router V4, Redux, Axios, Ant Design, Webpack, LESS, Node js(Express), Mongoose, AWS, Nginx, Mongodb Atlas, Yarn, NPM',
    detail: '<p>This CMS application is a frontend and backend separating application developed by React on the frontend and Node js on the backend. It uses Mongodb Altlas cloud service to save the data and database language is MongoDB. With the project, it has several modules including login, category check, update and create new, product check, update and create. The application is using Ant Design as the UI framework and come with LESS. It is using Webpack to import these two library plugins. Regarding to the React part, it uses React router V4 to control the app path and uses Axios for the Ajax request. The ajax request includes both from backend API endpoint as well as third party API. React Redux is also used to save and maintain React state value. With the backend, it uses Node js and Express framework. The model level is MongoDB. I use Mongoose to create model and with the live demo app, it uses Mongodb Atlas to save data. The application is deployed on AWS and the Nginx is used for server. </p>',
    demoLink: 'http://ec2-18-216-163-204.us-east-2.compute.amazonaws.com/cms/',
    extraInfo: 'Login detail: Username: admin Password: admin',
    githubLink: 'https://github.com/slamdunkYYY/cms-client',
    githubLink2: 'https://github.com/slamdunkYYY/cms-server'
  },
  {
    name: 'React Chat Application',
    img: ['./assets/Job_Seeker.PNG'],
    keyTech: 'React, React router V4, Redux, Axios, Ant Design Mobile, Webpack, LESS, Socket.io, Node js, Mongoose, AWS, Nginx, Mongodb Atlas,Yarn, NPM',
    detail: '<p>This chat application is a frontend and backend separating application developed by React on the frontend and Node js on the backend. It uses Mongodb Altlas cloud service to save the data and database language is MongoDB. With the project, it has several modules including login, chat - sending and receiving message and chat people list. The application is using Ant Design mobile as the UI framework and come with LESS. It is using Webpack to import these two library plugins. Regarding to the React part, it uses React router V4 to control the app path and uses Axios for the Ajax request. The ajax request includes both from backend API endpoint as well as third party API. React Redux is also used to save and maintain React state value. With the backend, it uses Node js and Express framework. The model level is MongoDB. I use Mongoose to create model and with the live demo app, it uses Mongodb Atlas to save data. Both frontend and backend are using Socket.io for the chat message transfer. The message will be store in Redux on frontend once got from server and save on MongoDB cloud platform. The application is deployed on AWS and the Nginx is used for server. </p>',
    demoLink: 'http://ec2-18-216-163-204.us-east-2.compute.amazonaws.com/job-seeker-app',
    extraInfo: 'Login detail:<br><1>Username: JobSeeker Password: JobSeeker<br><2>Username: Recruiter Password: Recruiter',
    githubLink: 'https://github.com/slamdunkYYY/job-seeker-deploy'
  },
  {
    name: 'Portfolio page',
    img: ['./assets/portfolio.PNG'],
    keyTech: 'React, SCSS, Github Page, Bootstrap React, Yarn',
    detail: '<p>This portfolio page you are viewing now is built by React. It deploys on Github pages and uses Bootstrap React for the UI library. Extra styles are sticky header and smooth scroll.</p>',
    demoLink: 'https://slamdunkyyy.github.io/portfolio/',
    githubLink: 'https://github.com/slamdunkYYY/portfolio'
  }
]

const WordPressProjects = [
  {
    name: 'WordPress Theme Development',
    img: [
      './assets/WP_theme_1.png',
      './assets/WP_theme_2.png',
      './assets/WP_theme_3.png',
    ],
    keyTech: 'WordPress API Hook, WordPress core API, WordPress shortcode, PHP, JQuery, CSS, Bootstrap, Git',
    detail: '<p>I created our company WP theme for commercial use. My template has one global setting section which can create basic global setting such as heading, footer, logo and so on. On each page or post, I also created the setting section for page or post unique. The title and banner can be set on here. I also created different page templates and those will load the matching different header and footer. Particularly, when choosing the landing page template, it will have a unique textarea for to add custom script to header and footer. I also create two WordPress hooks, one is in the header and another is on the footer so people can insert their code to this hook. This template also has the connection with some WordPress plugins such as Slider Revolution, like loading existing slider and choose it as the banner and WPBakery, like extends the existing functionalities. Besides, I also created some widget area to the template, so people can insert widget to that areas.</p><p>The version control is using Git.</p>',
    demoLink: 'https://github.com/marketing-eye/ME-Template',
  },
  {
    name: 'Elysian Energy',
    img: ['./assets/elysian_energy.jpg'],
    keyTech: 'WordPress development, PHP, MySQL, CSS, Bootstrap, JQuery',
    detail: '<p>I built the entire website for Elysian Energy using WordPress, CSS, Bootstrap 3 and JQuery. Apart from the general website development. I created the plan search functionality on the plan search landing page: <a href="https://elysianenergy.com.au/electricity-plans/" target="_blank">https://elysianenergy.com.au/electricity-plans/</a>. When input the postcode, it will call Ajax and the JQuery autofill library to get the dropdown list of matching postcode area from database. When choose one area, it will apply Ajax again and retrieve the plan data from the database and display the detail.</p><p>I also did the Newsletter development for this client</p>',
    demoLink: 'https://elysianenergy.com.au/'
  },
  {
    name: 'Morrows',
    img: ['./assets/morrows.jpg'],
    keyTech: 'WordPress development, WordPress shortcode development, WordPress plugin functionality extend, 3rd party API communication(Westpac payment gateway api), PHP, MySQL, CSS, Bootstrap, JQuery',
    detail: '<p>On this WordPress site, besides the normal WordPress development by PHP, CSS and JQuery, I connect their payment with Westpac payment gateway api by PHP code, https://www.morrows.com.au/pay-online/. The form information will connect with the payment API and do the real payment. This is the most regular payment gateway for this client. I also create their team post type and make it display on the team page.</p>',
    demoLink: 'https://www.morrows.com.au/'
  },
  {
    name: 'Horan Bird',
    img: ['./assets/Horan_Bird.jpg'],
    keyTech: 'WordPress development, WordPress shortcode development, WordPress plugin functionality extend, PHP, MySQL, CSS, Bootstrap, JQuery',
    detail: '<p>I created this website by WordPress. This website uses a lot of custom shortcodes. With each quote button, I create a shortcode with different condition by passing different value parameters. It will popup a new window with or without the title and if there is a postcode input field, it will display another different type of popup window with the postcode and production selector. I extends the Gravity form plugin basic functionality with the shortcode so as to finish this postcode input function. I also create the search function via MySQL, PHP and JQuery for this search page: <a href="https://www.horanandbird.com.au/electricity-2-2/" target="_blank">https://www.horanandbird.com.au/electricity-2-2/</a>. After submit the postcode, it will retrieve data from MySQL and check if there is a plan existing.</p>',
    demoLink: 'https://www.horanandbird.com.au/'
  },
  {
    name: 'Rom Control',
    img: ['./assets/rom_control.png'],
    keyTech: 'WordPress development, WordPress shortcode development, WordPress session control, WP Bakery theme functionality extend, PHP, CSS, Bootstrap, JQuery',
    detail: '<p>The site is a WordPress site. With different type of services, it has different theme color for each one. I create different theme color patten for the site. I also the default layout of WPBakery theme column element, adding the overlay attribute setting on the frontend and the overlay html code, so the part, for example on the "INDUSTRIAL ELECTRONIC ENGINEERING SOLUTIONS" of the homepage will have the overlay. I also use PHP session for the form, when a person submitted the form, within the session valid time, that person can download file directly without filling in that form. After the form submitting, it will jump to a new download page to download the brochure. If the session is not active or expired, that download page will not have the download button. That entire section is using WordPress Session, Contact Form7 plugin and bootstrap modal popup.</p>',
    demoLink: 'https://www.rom-control.com.au/'
  }, {
    name: 'Cross Fire',
    img: ['./assets/cross_fire.png'],
    keyTech: 'WordPress development, theme layout amend, theme functionality extend, Create new custom post type, JQuery, CSS',
    detail: 'This WordPress site is using different theme compared with other websites. I revised the theme layout and basic functionalities. For example, on the team page, <a href="https://www.crossfiresound.com/about-us/our-team/" target="_blank">https://www.crossfiresound.com/about-us/our-team/</a> , I created the team member post type and build the retrieve people information and the filter functionality as well as the popup to display the people detail. I also use IsoTape and JQuery to create the gallery style.',
    demoLink: 'https://www.crossfiresound.com/'
  }, {
    name: 'International Independent Medical Examiners',
    img: ['./assets/iime.jpg'],
    keyTech: 'WordPress development, WordPress role control, WordPress shortcode development, JQuery, CSS',
    detail: 'My responsibility for this site include building the site using CSS, Javascript(JQuery) and WordPress. I create a role control functionality for the site where when different user(admin or patient) login the site, it will show different content. I also create the custom type post for the doctor member and its shortcode to the doctor detail slider. Within the shortcode, I did the entire WP Query so as to loading all details of the doctor and display it on the site. It also uses the Javascript to make it as a slider.',
    demoLink: 'https://www.iimeonline.com/'
  },
  {
    name: 'MTI',
    img: ['./assets/MTI.png'],
    keyTech: 'WordPress development, IP address detect, JQuery, CSS',
    detail: 'I create the IP address detector functionality apart from the site development. The site will display different content based on the visitor IP address.',
    demoLink: 'http://www.mtidispatch.com/'
  },
  {
    name: 'Steel Supplies Charters Towers',
    img: ['./assets/Steel_supplier.jpg'],
    keyTech: 'WordPress development, WooCommerce, WordPress shortcode development, Contact Form functionality extend, JQuery, CSS',
    detail: 'This is a WooCommerce website. I create the WooCommerce category list query shortcode on the homepage. Besides, I revised the default WooCommerce layout based on the default WooCommerce hook.',
    demoLink: 'https://steelsuppliescharterstowers.com.au/'
  },
  {
    name: 'Thomas USAF',
    img: ['./assets/Thomas_usaf.png'],
    keyTech: 'WordPress development, WordPress shortcode development, WordPress plugin functionality extend, ACF plugin, JQuery, CSS',
    detail: 'The site is a WordPress site. I use JQuery to create a new layout style, so as to make the image half full size but the text will still stay within the container, for example, the middle part of the homepage. The default layout should be like all content inside the container. I also create a new "team" custom post type and its personal detail information page on the backend. I also create the slider functionality on the events page. The slider will get each events posts and its custom fields created by ACF plugin and display on the frontend page.',
    demoLink: 'https://www.thomasusaf.com/'
  },
]
const refs = menu.reduce((acc, value) => {
  acc[value.linkedid] = React.createRef();
  return acc;
}, {});

class App extends Component {

  state = {
    activeModalReact: null,
    activeModalWP: null,
  }

  handleClose = () => {
    console.log("close")
    this.setState({
      activeModalReact: null,
      activeModalWP: null
    })
  }

  handleReactShow = (e, index) => {
    console.log("e", e)
    console.log("index", index)
    this.setState({
      activeModalReact: index
    })
  }

  handleWPShow = (e, index) => {
    console.log("e", e)
    console.log("index", index)
    this.setState({
      activeModalWP: index
    })
  }

  handleMenuClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  render() {
    return (
      <div>
        <div className="header" id="header">
          <div className="menu bg-light" >
            <div className="container">
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><h1>Shuangyue Yin Portfolio</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    {
                      menu.map(item => (
                        <Nav.Link key={item.linkedid} onClick={() => this.handleMenuClick(item.linkedid)}>
                          {item.name}
                        </Nav.Link>
                      ))
                    }
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
        <div className="container">
          <div className='content'>
            <hr></hr>
            <div>
              Hello, welcome to my portfolio page! You will know more detail about myself as well as the projects I have done so far. Please feel free to contact me if you are interested in my skills.
          <hr></hr>
            </div>
            <div className="content-inner-container" id="about" >
              <div className="anchor" ref={refs['about']}></div>
              <h2>About me</h2>
              <p>I have near 4 years web development experience with the backend PHP(WordPress) and Frontend(JQuery and React). I am creative and reliable with a natural problem-solving mind, team spirit, and positive attitude. I am looking to bring my value to a great team.</p>
            </div>
            <hr></hr>
            <div className="content-inner-container" id="projects">
              <div className="anchor" ref={refs['projects']}></div>
              <h2>Projects</h2>
              <p>Here you will see my previous projects for React and WordPress. Please click each one for the project link and details.</p>
              <div className="projects-detail react-project">
                <h3>React</h3>
                <p>Each project is using React framework and using Axios for the ajax call. The UI libraries I use on the projects are Bootstrap and Ant Design. Please click each project for detail.</p>
                <Container>
                  <Row>
                    {
                      reactProjects.map((project, index) =>
                        <Col key={project.name} sm={12} md={4} className='project-block'>
                          {
                            (project.img && project.img.length === 1) ?
                              <div className="img-wrapper">
                                <img src={project.img} alt="project" onClick={e => this.handleReactShow(e, index)} />
                              </div> : <div className="img-wrapper">
                                <img src={project.img[0]} alt="project" onClick={e => this.handleReactShow(e, index)} />
                              </div>
                          }
                          <Button id={index} variant="link" onClick={e => this.handleReactShow(e, index)}>{project.name}</Button>
                          <Modal size='lg' className="project-modal project-modal-react" show={this.state.activeModalReact === index} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>{project.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <p className="key-tech"><b>Key Tech:</b><br />{project.keyTech}</p>
                              <b>Detail:</b>
                              <div className="detail" dangerouslySetInnerHTML={{ __html: project.detail }} />
                              <div className="demo-link"><b>Demo:</b><br /><a target="_blank" rel="noopener noreferrer" href={project.demoLink}>{project.demoLink}</a></div>
                              <div className="extra-info" dangerouslySetInnerHTML={{ __html: project.extraInfo }} />
                              <div className="github-link"><b>Github link:</b><br /><a target="_blank" rel="noopener noreferrer" href={project.githubLink}><FontAwesomeIcon icon={faGithub} /> {project.githubLink}</a><br />
                              {
                                (project.githubLink2) ? <div>
                                <a target="_blank" rel="noopener noreferrer" href={project.githubLink2}><FontAwesomeIcon icon={faGithub} /> {project.githubLink2}</a></div>
                                : null}
                              </div>
                              {(project.img && project.img.length > 1) ?
                                <div className="extra-images">
                                  <b>Extra Images Gallery:</b><br />
                                  <Carousel slide='false'>
                                    {
                                      (project.img).map((img, index) =>
                                        <Carousel.Item key={index}>
                                          <img
                                            className="react-project-demo"
                                            src={img}
                                            alt="demo"
                                          />
                                        </Carousel.Item>
                                      )
                                    }
                                  </Carousel>
                                </div>
                                : null}
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                          </Modal>
                        </Col>
                      )
                    }
                  </Row>
                </Container>
              </div>
              <br />
              <div className="projects-detail WordPress-project">
                <h3>WordPress</h3>
                <p>The below is my WordPress projects. Each project is using WordPress(PHP), CSS and JQuery. Some extra technologies will be detailed inside the project block. I also did SEO for all websites below and each site score on GTMatrix is over 80/100.</p>
                <Container>
                  <Row>
                    {
                      WordPressProjects.map((project, index) =>
                        <Col key={project.name} sm={12} md={4} className='project-block'>
                          {
                            (project.img && project.img.length === 1) ?
                              <div className="img-wrapper">
                                <img src={project.img} alt="project" onClick={e => this.handleWPShow(e, index)} />
                              </div> : <div className="img-wrapper">
                                <img src={project.img[0]} alt="project" onClick={e => this.handleWPShow(e, index)} />
                              </div>
                          }
                          <Button id={index} variant="link" onClick={e => this.handleWPShow(e, index)}>{project.name}</Button>
                          <Modal size='lg' className="project-modal project-modal-wp" show={this.state.activeModalWP === index} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>{project.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <p className="key-tech"><b>Key Tech:</b><br />{project.keyTech}</p>
                              <b>Detail:</b>
                              <div className="detail" dangerouslySetInnerHTML={{ __html: project.detail }} />
                              <div className="demo-link"><b>Website Link:</b><br /><a target="_blank" rel="noopener noreferrer" href={project.demoLink}>{project.demoLink}</a></div>
                              {(project.img && project.img.length > 1) ?
                                <div className="extra-images">
                                  <b>Extra Images Gallery:</b><br />
                                  <Carousel slide='false'>
                                    {
                                      (project.img).map((img, index) =>
                                        <Carousel.Item key={index}>
                                          <img
                                            className="wp-project-demo"
                                            src={img}
                                            alt="demo"
                                          />
                                        </Carousel.Item>
                                      )
                                    }
                                  </Carousel>
                                </div>
                                : null}
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                          </Modal>
                        </Col>
                      )
                    }
                  </Row>
                </Container>
              </div>
              <div className="projects-detail others-project">
                <h3>Others</h3>
                <p>I also create the Newsletter template for the company and it's responsive. I used this template to build Newsletters for some clients and applied them into Mailchimp and Futuremail.</p>
              </div>
            </div>
            <hr></hr>
            <div className="content-inner-container" id="downloads">
              <div className="anchor" ref={refs['downloads']}></div>
              <h2>Downloads</h2>
              <p>Please feel free to download my resume and the skills description</p>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="./assets/Shuangyue_Yin_CV.pdf">Resume</a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="./assets/Shuangyue_Yin_Cover_letter.pdf">Skills description</a>
              </div>
            </div>
            <hr></hr>
            <div className="content-inner-container" id="contact" >
              <div className="anchor" ref={refs['contact']}></div>
              <h2>Contact</h2>
              <Table responsive borderless>
                <tbody>
                  <tr>
                    <td><FontAwesomeIcon icon={faEnvelopeSquare} /></td>
                    <td><a href="mailto:shuangyueyyy@gmail.com">shuangyueyyy@gmail.com</a></td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faPhone} /></td>
                    <td>0420 692 221</td>
                  </tr>
                  <tr>
                    <td><FontAwesomeIcon icon={faLinkedin} /></td>
                    <td><a href="https://www.linkedin.com/in/moonshuangyueyin/">https://www.linkedin.com/in/moonshuangyueyin/</a></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="footer">

          </div>
        </div>
      </div>
    )
  }
}

export default App;
