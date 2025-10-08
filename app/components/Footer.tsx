export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Shabakah. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
