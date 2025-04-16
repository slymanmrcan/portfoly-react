'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => (pathname === path ? 'current' : '');

  return (
    <header className="s-header">
      <div className="header-mobile">
        <span className="mobile-home-link">
          <Link href="/home">Ana Sayfa</Link>
        </span>
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li className={isActive('/home')}>
              <Link href="/home" className="home-link">Ana Sayfa</Link>
            </li>
            <li className={isActive('/about')}>
              <Link href="/about" className="smoothscroll">Hakkımda</Link>
            </li>
            <li className={isActive('/buessines')}>
              <Link href="/buessines" className="smoothscroll">İşlerim</Link>
            </li>
            <li className={isActive('/contact')}>
              <Link href="/contact" className="smoothscroll">İletişim</Link>
            </li>
            <li className={isActive('/blog')}>
              <Link target='_blank' href="https://blog.kodkoyu.site" className="smoothscroll">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
