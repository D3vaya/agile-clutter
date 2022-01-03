import { Colors } from '../../commons';
import { Avatar, Card } from '../../atoms';
import { VotingCardProps } from '../models';
import { WomSvg } from './icons';

export const VotingCard: React.FC<VotingCardProps> = ({
  vote,
  avatarColor,
  className = '',
  state = 'voting',
}) => {
  const baseTailwind = 'flex flex-col flex-nowrap justify-around items-center';
  let bgCard = Colors.white;
  if (state === 'viewVote') {
    bgCard = avatarColor as Colors;
  } else if (state === 'voted') {
    bgCard = 'violet' as Colors;
  }

  const votedState = () => {
    return (
      <div className="inline my-1">
        <WomSvg />
      </div>
    );
  };
  const votingState = () => {
    return <Avatar size="sm" color={avatarColor} />;
  };
  const viewVoteState = () => {
    return <span>{vote}</span>;
  };

  const mapStates = {
    voted: votedState,
    voting: votingState,
    viewVote: viewVoteState,
  };

  const Component = mapStates[state];

  return (
    <Card color={bgCard}>
      <div className={`${baseTailwind} ${className}`}>
        <Component />
      </div>
    </Card>
  );
};
