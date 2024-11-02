import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Base.css';

function Database() { 
  return (
    <div className='base'>
      <FontAwesomeIcon icon={faDatabase} size="2x" color="#333" />
      <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
      <FontAwesomeIcon icon={faCodeBranch} size="2x" color="#333" />
    </div>
  );
}

export default Database;



