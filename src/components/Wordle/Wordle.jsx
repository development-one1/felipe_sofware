import { useRef } from 'react';
import { styled } from '@stitches/react';
import { useTrail, animated } from '@react-spring/web';



const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column', // Cambia a 'column' para disposición vertical
  gap: 10,
  marginBottom: 80,
});

const Box = styled('div', {
  position: 'relative',
  height: 50,
  width: 50,
});

const SharedStyles = {
  width: '100%',
  height: '100%',
  position: 'center',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontWeight: 800,
  backfaceVisibility: 'hidden',
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  border: 'solid 2px #1a1a1a',
  color: '#ff0000',
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: '#6cab64',
  border: 'solid 2px #6cab64',
  color: '#fafafa',
});

const items = ['80%', '90%', '70%', '60%', '50%', '45%'];

function Wordle() {
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  return (
    <div className="wordle-container">
      <Container onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <Box key={i} className="wordle-box"> {/* Usamos la clase aquí */}
            <FrontBox
              style={{
                transform: rotateX.to((val) => `perspective(600px) rotateX(${val}deg)`),
                transformStyle: 'preserve-3d',
              }}
              className="front-box" 
            >
              {'?'}
            </FrontBox>
            <BackBox
              style={{
                transform: rotateX.to((val) => `perspective(600px) rotateX(${180 - val}deg)`),
                transformStyle: 'preserve-3d',
              }}
              className="back-box" 
            >
              {items[i]}
            </BackBox>
          </Box>
        ))}
      </Container>
    </div>
  );
}

export default Wordle;