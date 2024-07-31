import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/" className="btn btn-center">
      &larr; Back to reservations
    </Link>
  );
};

export default BackButton;
