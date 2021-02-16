import React from 'react';

import { Container, Form, SpaceshipsContainer, SpaceshipCard } from './styles';
import logo from '../../assets/logo-white.png';

const Home: React.FC = () => {
  const ships = [
    {
      name: 'Millennium Falcon',
      stops: 9,
    },
    {
      name: 'Millennium Falcon',
      stops: 9,
    },
    {
      name: 'Millennium Falcon',
      stops: 9,
    },
  ];

  return (
    <Container>
      <img src={logo} alt="Logo Journey Stops" />
      <Form>
        <input placeholder="Distance in mega lights" />
        <button type="submit">OK</button>
      </Form>

      <SpaceshipsContainer>
        {ships.map(ship => (
          <SpaceshipCard>
            <span>{ship.name}</span>
            <span>{ship.stops}</span>
          </SpaceshipCard>
        ))}
      </SpaceshipsContainer>
    </Container>
  );
};

export default Home;
