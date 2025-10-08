"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
        © {new Date().getFullYear()} Shabakah. All rights reserved.
      </div>
    </footer>
  );
}
