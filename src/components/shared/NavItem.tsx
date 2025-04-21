
interface navItemProps {
    href: string;
    text: string;
}

const NavItem = ({ href, text}: navItemProps) => {
    return (
        <li>
            <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
                {text}
            </a>

        </li>
    );
};

export default NavItem;