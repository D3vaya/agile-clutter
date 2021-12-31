import { Colors } from '../commons';

export interface VotingCardProps {
  vote?: string;
  className?: string;
  avatarColor?: Colors;
  state?: 'voting' | 'voted' | 'viewVote';
}
