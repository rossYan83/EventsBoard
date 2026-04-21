import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const typeBadgeColors = {
  free: css`
    background: rgba(16,185,129,0.15);
    color: var(--free-color);
    border-color: rgba(16,185,129,0.4);
  `,
  paid: css`
    background: rgba(245,158,11,0.15);
    color: var(--paid-color);
    border-color: rgba(245,158,11,0.4);
  `,
  vip: css`
    background: rgba(124,58,237,0.2);
    color: #a78bfa;
    border-color: rgba(124,58,237,0.5);
  `,
};

const Card = styled.li`
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-glow);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px; height: 100%;
    background: ${({ $type }) =>
      $type === 'free' ? 'var(--free-color)' :
      $type === 'paid' ? 'var(--paid-color)' : 'var(--vip-color)'};
    border-radius: 12px 0 0 12px;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow), 0 8px 32px rgba(0,0,0,0.4);
    border-color: rgba(0,229,255,0.3);
    background: var(--bg-card-hover);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const EventName = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  letter-spacing: 0.02em;
  flex: 1;
`;

const TypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
  flex-shrink: 0;
  ${({ $type }) => typeBadgeColors[$type] || typeBadgeColors.free}
`;

const MetaList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MetaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--text-secondary);

  svg {
    flex-shrink: 0;
    color: var(--accent-cyan);
    opacity: 0.7;
    font-size: 0.9rem;
  }
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--text-secondary);

  svg { flex-shrink: 0; color: var(--accent-cyan); opacity: 0.7; }
`;

const TimeSeparator = styled.span`
  color: var(--text-dim);
  font-size: 0.75rem;
`;

const TimeValue = styled.span`
  font-family: 'Orbitron', monospace;
  font-size: 0.75rem;
  color: var(--accent-cyan);
  opacity: 0.9;
`;

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit'
  });
}

function Event({ name, start, end, location, speaker, type, locationIcon, speakerIcon, timeIcon }) {
  return (
    <Card $type={type}>
      <CardHeader>
        <EventName>{name}</EventName>
        <TypeBadge $type={type}>{type}</TypeBadge>
      </CardHeader>

      <MetaList>
        <MetaItem>{locationIcon}<span>{location}</span></MetaItem>
        <MetaItem>{speakerIcon}<span>{speaker}</span></MetaItem>
      </MetaList>

      <TimeRow>
        {timeIcon}
        <span>{formatDate(start)}</span>
        <TimeSeparator>·</TimeSeparator>
        <TimeValue>{formatTime(start)}</TimeValue>
        <TimeSeparator>→</TimeSeparator>
        <TimeValue>{formatTime(end)}</TimeValue>
      </TimeRow>
    </Card>
  );
}

Event.propTypes = {
  name:         PropTypes.string.isRequired,
  start:        PropTypes.string.isRequired,
  end:          PropTypes.string.isRequired,
  location:     PropTypes.string.isRequired,
  speaker:      PropTypes.string.isRequired,
  type:         PropTypes.oneOf(['free', 'paid', 'vip']).isRequired,
  locationIcon: PropTypes.element.isRequired,
  speakerIcon:  PropTypes.element.isRequired,
  timeIcon:     PropTypes.element.isRequired,
};

export default Event;