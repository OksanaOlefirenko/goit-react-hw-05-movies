import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader';
import { getReviews } from 'moviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Reviews } from 'components/Reviews';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviewsById() {
      setLoading(true);
      try {
        const reviews = await getReviews(movieId);
        if (reviews.length === 0) {
          return toast.error("Sorry, We don't have any reviews for this movie");
        }
        setReviews(reviews);
      } catch (error) {
        toast.error('Actors not found');
      } finally {
        setLoading(false);
      }
    }
    fetchReviewsById();
  }, [movieId]);

  return (
    <main>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      {loading && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
    </main>
  );
};
