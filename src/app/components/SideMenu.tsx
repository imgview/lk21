import { FaSearch, FaHome, FaGithub } from "react-icons/fa";
import Link from "next/link";

const SideMenu = () => (
    <aside className="fixed top-0 left-0 h-full w-16 bg-black flex flex-col items-center py-6 gap-6">
        <Link href="/"><FaHome className="text-2xl text-gray-400 hover:text-white cursor-pointer transition" /></Link>
        <Link href="/search"><FaSearch className="text-2xl text-gray-400 hover:text-white cursor-pointer transition" /></Link>
        <a href="https://github.com/xrce/lk21" target="_blank" rel="noreferrer"><FaGithub className="text-2xl text-gray-400 hover:text-white cursor-pointer transition" /></a>
    </aside>
);

export default SideMenu;
