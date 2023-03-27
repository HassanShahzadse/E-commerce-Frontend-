import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>404 Error Page Not Found</h1>
      <Link to="/home">Back to Home</Link>
    </>
  );
};
export default ErrorPage;
