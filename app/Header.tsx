import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavLink from './components/NavLink';
import SearchBox from './components/SearchBox';

const Header = () => {
  return (
    <header>
      <div className="grid items-center grid-cols-3 p-10">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link className="" href="/" prefetch={false}>
          <h1 className="text-2xl text-center">Next Breaking News</h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode Button */}

          <button className="hidden px-4 text-white rounded-full md:inline bg-slate-900 lg:px-8 lg:py-4 dark:bg-slate-800">Subscribe Now</button>
        </div>
      </div>

      {/* NavLinks */}
      <NavLink />

      {/* SearchBox */}
      <SearchBox />

    </header>
  )
}

export default Header;