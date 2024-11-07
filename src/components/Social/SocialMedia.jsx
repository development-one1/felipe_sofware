import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Social.css'

function SocialMedia() {
  return (
    <>
            <div className='social'>
              <a href=''>
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#3b5998"/>
              </a>
              <a href='https://www.linkedin.com/in/camacho-rodriguez/'>
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5" />
              </a>
              <a href='https://www.instagram.com/felipe_develop/'>
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C"/>
              </a>
              
            </div>
    </>
  );
}

export default SocialMedia;
