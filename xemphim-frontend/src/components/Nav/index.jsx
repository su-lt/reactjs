import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from "react-icons/bi";
import NavItem from "./NavItem";

const defaultIconSize = "1.5rem";
const items = [
    { label: "Home", icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { label: "Movies", icon: <BiMoviePlay size={defaultIconSize} /> },
    { label: "About", icon: <BiInfoCircle size={defaultIconSize} /> },
];

const NavItemsContainer = () => (
    <>
        {items.map((item, idx) => (
            <NavItem item={item} key={idx} />
        ))}
    </>
);

const Nav = () => {
    return (
        <div className="col-span-1 bg-cyan-200">
            <div className="mx-4 text-right">
                <h1 className="uppercase text-primary my-4 border-b border-primary">
                    xemphim.abc
                </h1>
                <ul className="mx4 text-right">
                    <NavItemsContainer />
                </ul>
            </div>
        </div>
    );
};

export default Nav;
