import {Comment} from '../../types/comment.ts';
import Review from './Review.tsx';

type ReviewsListProps = {
  comments: Comment[];
}

export default function ReviewsList({comments}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <Review key={comment.id} comment={comment} />)}
    </ul>
  );
}
