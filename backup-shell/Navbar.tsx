export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">⚽ Shabakah</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/news" className="hover:underline">News</a></li>
        <li><a href="/standings" className="hover:underline">Standings</a></li>
        <li><a href="/tickets" className="hover:underline">Tickets</a></li>
        <li><a href="/store" className="hover:underline">Store</a></li>
      </ul>
    </nav>
  );
}
