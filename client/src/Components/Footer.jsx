import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-center p-4 mt-auto">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} CoinWhiz. All rights reserved.
      </p>
    </footer>
  );
}
