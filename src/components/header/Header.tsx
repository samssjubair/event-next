import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-lg font-semibold">
            <h1 className='text-slate-100 text-4xl'>Event-next</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-gray-400" passHref>Home</Link></li>
              <li><Link href="/events" className="hover:text-gray-400">Events</Link></li>
              <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

    );
};

export default Header;