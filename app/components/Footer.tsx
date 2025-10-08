export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} Shabakah. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-6 text-sm">
        <a href="/contact">Contact Us</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
