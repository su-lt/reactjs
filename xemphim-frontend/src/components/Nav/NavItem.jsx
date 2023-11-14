const NavItem = ({ item }) => {
    const { label, icon, active } = item;

    return (
        <div>
            <li
                className={`p-2 flex justify-end items-center gap-2 cursor-pointer ${
                    active ? `bg-primary text-white` : ``
                }`}
            >
                <h4>{label}</h4>
                {icon}
            </li>
        </div>
    );
};

export default NavItem;
