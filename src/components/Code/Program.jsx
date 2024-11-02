import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

import './Lenguas.css';

function Program() { 
  return (
    <div className='len'>
      <FontAwesomeIcon icon={faHtml5} size="2x" color="#e34c26" />
      <FontAwesomeIcon icon={faCss3} size="2x" color="#264de4" />
      <FontAwesomeIcon icon={faJs} size="2x" color="#f0db4f" />
    </div>
  );
}

export default Program;

