import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Shabakah</Link>
      <div className="flex space-x-6">
        <Link href="/matches">Matches</Link>
        <Link href="/standings">Standings</Link>
        <Link href="/news">News</Link>
        <Link href="/ar" className="bg-white text-blue-800 px-2 py-1 rounded">AR</Link>
      </div>
    </nav>
  );
}
