import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="logo">MySite</a>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      
      <h1 className="yellow">This is our Home Page</h1>
    </div>
  );
}



