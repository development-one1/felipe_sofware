import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import Wordle from './Wordle/Wordle';

import './Lenguas.css';

function Program() {
  return (
    <>
      <div id="program">
        <div className="len">
            <FontAwesomeIcon icon={faHtml5} size="2x" color="#e34c26" />
            <FontAwesomeIcon icon={faCss3} size="2x" color="#264de4" />
            <FontAwesomeIcon icon={faJs} size="2x" color="#f0db4f" />
            <FontAwesomeIcon icon={faDatabase} size="2x" color="#333" />
            <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
            <FontAwesomeIcon icon={faCodeBranch} size="2x" color="#333" /> 
          </div>
        <div className="wordle-container">
            <Wordle />
        </div>
        
      </div>
    </>
  );
}

export default Program;

