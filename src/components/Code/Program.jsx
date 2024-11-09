import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import './Lenguas.css';

function Program() {
  return (
    <>
      <div id="program">
        <div className="len">
            <a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'>
            <FontAwesomeIcon className='FontAwesomeIcon' icon={faHtml5} size="2x" color="#e34c26" />
            </a>
            <a href='https://flexboxfroggy.com/#es'>
            <FontAwesomeIcon icon={faCss3} size="2x" color="#264de4" />
            </a>
            <a href='https://www.w3schools.com/js/'>
            <FontAwesomeIcon icon={faJs} size="2x" color="#f0db4f" />
            </a>
            <FontAwesomeIcon icon={faDatabase} size="2x" color="#333" />
            <a href='https://docs.github.com/es'>
            <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
            </a>
            <FontAwesomeIcon icon={faCodeBranch} size="2x" color="#333" /> 
          
        </div>
      </div>
    </>
  );
}

export default Program;

