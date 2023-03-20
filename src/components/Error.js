import ErrorImage from "../assets/img/Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  const {data} = err;//destructuring
  return (
    <div className="text-center  h-screen w-auto px-0 py-2.5 ">
      <img className="pl-[250] m-10" src={ErrorImage} alt="Error Image" />
      <h1 className="text-4xl font-bold font-sans">Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="text-3xl font-semibold font-sans px-0 py-2.5">{data}</h3>
      <button className="p-3  text-base font-bold text-black  hover:bg-red-400 rounded-full">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default Error;