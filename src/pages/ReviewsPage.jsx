import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader';
import { getReviews } from 'moviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Reviews } from 'components/Reviews';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getReviews(movieId)
      .then(results => {
        if (results.length === 0) {
          return toast.error("Sorry, We don't have any reviews for this movie");
        }
        setReviews(results);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <main>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      {loading && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
      {error && <p>Something went wrong, please try again later!g</p>}
    </main>
  );
};

export default ReviewsPage;
