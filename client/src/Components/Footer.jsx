import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-center p-4 mt-auto">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} CoinWhiz Made with ❤️ by Anudeep. All rights reserved.
      </p>
    </footer>
  );
}
