import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer h-20  bg-black w-full   ">
            <h2 className="text-cyan-50 text-center font-poppins font-semibold p-6">
                <Link to="https://www.linkedin.com/in/vijaykv555/">
                    Food Villa ©️ 2023 Created with ❣️ by
                    <a
                        href="https://www.linkedin.com/in/narasimha-p-l-bb249b230/"
                        target="_blank"
                    >
                        <span className="cursor-pointer ml-1 font-medium hover:underline">
                            Narasimha Palla
                        </span>
                    </a>
                </Link>
            </h2>
        </div>
    );
};
export default Footer;
