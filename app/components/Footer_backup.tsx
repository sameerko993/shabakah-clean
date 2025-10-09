export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto py-6">
      <div className="container mx-auto text-center text-sm">
        <p className="text-gray-400">
          © 2025 <span className="text-yellow-400 font-semibold">Shabakah</span>. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
          <a href="/privacy" className="hover:text-yellow-400">Privacy</a>
          <a href="/disclaimer" className="hover:text-yellow-400">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
