import Link from "next/link"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between ">
        <Logo />
        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center">
            <Link href='/' className="mr-2">Home</Link>
            <Link href='/about'  className="mx-2">About</Link>
            <Link href='/contact'  className="mr-2">Contact</Link>
            <button></button>
        </nav>
        <div>
            Social Links
        </div>
    </header>
  )
}

export default Header