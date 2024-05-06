import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from "react-icons/bi";
import NavItem from "./NavItem";
import { useState } from "react";

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
    const [open, setOpen] = useState(false);

    return (
        <div className="min-w-[220px] col-span-1 bg-[#0f1111]">
            <div className="mx-4 text-right flex justify-between items-center sm:block">
                <h1 className="uppercase text-primary my-4 border-b border-primary">
                    xemphim.abc
                </h1>
                <div>
                    <BiMenu
                        className="cursor-pointer sm:hidden"
                        size={defaultIconSize}
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <ul className={`mx4 text-right ${open ? "" : "hidden"} sm:block`}>
                <NavItemsContainer />
            </ul>
        </div>
    );
};

export default Nav;
