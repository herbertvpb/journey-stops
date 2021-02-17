import React, { useState, FormEvent, useEffect } from 'react';

import {
  Container,
  Form,
  SpaceshipsContainer,
  SpaceshipCard,
  Info,
  SeeMore,
  Content,
} from './styles';
import logo from '../../assets/logo-white.png';
import api from '../../services/api';
import { ISpaceship, TimeType } from './types';

const Home: React.FC = () => {
  const [ships, setShips] = useState<ISpaceship[]>([]);
  const [page, setPage] = useState<number>(1);
  const [distance, setDistance] = useState<number>();
  const [loading, setLoading] = useState(false);
  const [showSeeMore, setShowSeeMore] = useState(false);

  const getConsumableHours = (consumable: string) => {
    if (consumable === 'unknown') return -1;

    const [value, type] = consumable.split(' ');

    let consumableHours;

    switch (type.replace('s', '') as TimeType) {
      case TimeType.YEAR:
        consumableHours = +value * 8766;
        break;
      case TimeType.MONTH:
        consumableHours = +value * 730.5;
        break;
      case TimeType.WEEK:
        consumableHours = +value * 168;
        break;
      case TimeType.DAY:
        consumableHours = +value * 24;
        break;
      default:
        consumableHours = 0;
        break;
    }

    return consumableHours;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchShips = async () => {
    if (!distance) {
      setShips([]);
      return;
    }

    setLoading(true);

    const response = await api.get(`/starships/?page=${page}`);

    const { results, next } = response.data;

    const spaceships = results.map((ship: ISpaceship) => {
      const { MGLT, consumables } = ship;

      const stops = Math.floor(
        +distance / (MGLT * getConsumableHours(consumables)),
      );

      return {
        ...ship,
        stops: stops >= 0 ? stops : 'Unknown',
      };
    });

    setShowSeeMore(!!next);

    setShips([...ships, ...spaceships]);

    setLoading(false);
  };

  const resetList = () => {
    setShips([]);
    setShowSeeMore(false);
    setPage(1);
  };

  const handleShipStops = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    resetList();
    await fetchShips();
  };

  const handleFetchMoreShips = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (page >= 1) fetchShips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Container>
      <img src={logo} alt="Logo Journey Stops" />
      <Form onSubmit={handleShipStops}>
        <input
          value={distance}
          onChange={e => setDistance(+e.target.value)}
          placeholder="Distance in mega lights"
        />
        <button type="submit" disabled={loading || !distance}>
          {loading && page < 2 ? 'Loading...' : 'OK'}
        </button>
      </Form>

      <Content>
        <SpaceshipsContainer>
          {!ships.length && (
            <Info>
              <span>
                Enter the distance in mega lights in the input above to see how
                many stops each ship must make to complete its journey
              </span>
            </Info>
          )}
          {ships.map(ship => (
            <SpaceshipCard>
              <span>
                <b>Ship: </b>
                {ship.name}
              </span>
              <span>
                <b>Stops: </b>
                {ship.stops}
              </span>
            </SpaceshipCard>
          ))}
        </SpaceshipsContainer>
        {showSeeMore && (
          <SeeMore>
            <button
              type="button"
              disabled={loading}
              onClick={handleFetchMoreShips}
            >
              {loading ? 'Loading...' : 'See More'}
            </button>
          </SeeMore>
        )}
      </Content>
    </Container>
  );
};

export default Home;
