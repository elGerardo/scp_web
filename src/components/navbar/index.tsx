import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-black py-3">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} height={75} alt="logo_scp" className="mr-4" />
          <Link href="/">SCP API</Link>
        </div>
        <Link href="/doc">API Docs</Link>
      </div>
    </nav>
  );
}
