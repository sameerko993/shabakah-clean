"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white py-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold tracking-wide">Shabakah</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/matches">Matches</Link></li>
          <li><Link href="/standings">Standings</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
