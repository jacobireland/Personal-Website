import './projects.css';
import spotifyflic from '../../assets/SpotiyAPIFlic.png';
import serverflic from '../../assets/HTTP Server Flic.png';
import websiteflic from '../../assets/website flic.png';
import moodmates from '../../assets/moodmates.png';

const Projects = ({ proj1Visible, setProj1Visible}) => {
  return (
    <div>
      <div className="mysite_projects" id="projects">
        <h1 className="projects_name"> Projects</h1>
        <div className="projects_row1">
          <div className="proj1">
            <img className="proj1_img" src={spotifyflic} width="300px" alt="spotify API project" onClick={() => { setProj1Visible(!proj1Visible); }}></img>
            <a className="proj1_name" href="https://github.com/jacobireland/Spotify-API-Playlist-Creator" target= "_blank" rel="noreferrer"> Playlist Generator</a>
            <h1 className="proj1_blurb"> Uses the Spotify API to visualize a user’s top genres and create recommended playlists specific to their music taste.</h1>
          </div>
          <div className="proj2">
            <a className="proj2_img" href="https://github.com/jacobireland/Personal-Website" target= "_blank" rel="noreferrer"><img src={websiteflic} width="311px" alt="spotify API project" /></a>
            <a className="proj2_name" href="https://github.com/jacobireland/Personal-Website" target= "_blank" rel="noreferrer"> My Website</a>
            <h1 className="proj2_blurb"> This website! I coded this from scratch using HTML, Javascript, CSS, and React JS.</h1>
          </div>
        </div>
        <div className="projects_row2">
          <div className="proj3">
            <a className="proj3_img" href="https://github.com/jacobireland/MoodMates" target= "_blank" rel="noreferrer"><img src={moodmates} width="310px" alt="spotify API project" /></a>
            <a className="proj3_name" href="https://github.com/jacobireland/MoodMates" target= "_blank" rel="noreferrer"> Mood Sharing App</a>
            <h1 className="proj3_blurb"> A mobile app designed for users to track their daily mood and see their friends moods. Implemented using React Native and Backendless as a project in my UI Design class.</h1>
          </div>
          <div className="proj4">
            <h1 className="proj4_private"> Unfortunately, due to course policies the code for this project is private and only available upon request. If you’re interested in viewing the full project, please reach out and I can give you access.</h1>
            <img className="proj4_img" src={serverflic} width="309px" alt="web server" />
            <h1 className="proj4_name"> HTTP Web Server</h1>
            <h1 className="proj4_blurb"> Written in C, this is a simple HTTP web server that serves static HTML and image files and implements specific dynamic content.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects