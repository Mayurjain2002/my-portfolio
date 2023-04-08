import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'
import tictactoe from '../../Assets/tictactoe.png'
import memegenerator from '../../Assets/memegenerator.png'
import weatherapp from '../../Assets/weatherapp.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tictactoe}
                isBlog={false}
                title="Tic-Tac-Toe"
                description="React is a frontend open-source JavaScript library, used to build interactive User Interfaces. React is focused on Single Page applications and is more popularly known as a SPA. In this , I use React and its hooks to build a fun Tic-Tac-Toe application."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={memegenerator}
                isBlog={false}
                title="Meme Generator App"
                description="This website provides users the ability to create their own memes easily , Users can generate random meme images , Users can write their own text at the top and bottom of the meme and user also can drag their text to anywhere."
                ghLink="https://olx-clone-rahul.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weatherapp}
                isBlog={false}
                title="Weather Application"
                description="In this project, I use openweather API which provides us free API to get weather details. Here we will add an input field where user will add any city name and as soon city name gets entered an API call will occur and details will be fetched to the screen. This App will be completely depends on API."
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col> */}

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist