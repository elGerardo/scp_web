import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";

export default function Navbar() {
  return (
    <nav className="shadow-bottom bg-dark py-3">
      <div className="container d-flex space-between px-4">
        <div className="d-flex">
          <Image src={Logo} height={75} alt="logo_scp" className="mr-4" />
          <Link href="/" className="my-auto ">SCP API</Link>
        </div>
        <Link href="/doc" className="my-auto">API Docs</Link>
      </div>
    </nav>
  );
}
