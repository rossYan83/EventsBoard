import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import Event from '../Event/Event';

const BoardSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 64px;
`;

const BoardTitle = styled.h1`
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: var(--accent-cyan);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 8px;

  span {
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 0.55em;
    display: block;
    letter-spacing: 0.3em;
    margin-top: 4px;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-cyan), transparent);
  margin: 20px auto 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -3px; left: 50%;
    transform: translateX(-50%);
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent-cyan);
  }
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 36px;
  flex-wrap: wrap;
`;

const StatChip = styled.div`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(0,229,255,0.05);
  border: 1px solid rgba(0,229,255,0.15);
  color: var(--text-secondary);

  strong { color: var(--accent-cyan); }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  padding: 0;
`;

function PageBoard({ events }) {
  const freeCount = events.filter(e => e.type === 'free').length;
  const paidCount = events.filter(e => e.type === 'paid').length;
  const vipCount  = events.filter(e => e.type === 'vip').length;

  const locationIcon = <MdLocationOn />;
  const speakerIcon  = <FaUserAstronaut />;
  const timeIcon     = <BiTimeFive />;

  return (
    <BoardSection>
      <BoardTitle>
        Upcoming Events
        <span>Galactic Schedule — All Sectors</span>
      </BoardTitle>

      <Divider />

      <StatsRow>
        <StatChip><strong>{events.length}</strong> total</StatChip>
        <StatChip style={{ color: 'var(--free-color)' }}><strong>{freeCount}</strong> free</StatChip>
        <StatChip style={{ color: 'var(--paid-color)' }}><strong>{paidCount}</strong> paid</StatChip>
        <StatChip style={{ color: '#a78bfa' }}><strong>{vipCount}</strong> vip</StatChip>
      </StatsRow>

      <Grid>
        {events.map(({ name, location, speaker, type, time }) => (
          <Event
            key={name}
            name={name}
            location={location}
            speaker={speaker}
            type={type}
            start={time.start}
            end={time.end}
            locationIcon={locationIcon}
            speakerIcon={speakerIcon}
            timeIcon={timeIcon}
          />
        ))}
      </Grid>
    </BoardSection>
  );
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name:     PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker:  PropTypes.string.isRequired,
      type:     PropTypes.oneOf(['free', 'paid', 'vip']).isRequired,
      time:     PropTypes.shape({
        start: PropTypes.string.isRequired,
        end:   PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PageBoard;