import Link from "next/link";


const NavLink = (props) => {
    const { href, title } = props
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 md:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{title}</Link>
    );
};

export default NavLink;