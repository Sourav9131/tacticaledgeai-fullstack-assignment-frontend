import './Style/movies.css';
import movieImage from '../assets/Images/imagemovie.png';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/updatemovie", { state: { movie } });
  };

  return (
    <div className="movie-card">
      <img
        src={movie?.poster || movieImage}
        alt={movie?.title || "media"}
      />

      <div className="movie-info">
        <h3>{movie?.title || "Untitled Media"}</h3>
        <p>{movie?.publishingYear || "—"}</p>

        <div className="infoContainer">
          <span></span>
          <button className="updateBtn" onClick={handleUpdate}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
