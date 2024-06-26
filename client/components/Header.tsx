import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';
import EagleIcon from '../images/output-onlinepngtools.png'

const Header = async ({}) => {
  const { userId } = auth();

  return (
    <nav className = 'bg-headerBG flex items-center justify-between px-6'>
      <div className='flex items-cente'>
        <Link href='/'>
          <div className='text-lg font-bold uppercase'>
            <Image src={EagleIcon} className='hover:scale-110 transition-transform duration-500' alt="Estate Eagle Logo" width={80} height={80} />
          </div>
        </Link>
      </div>
      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='hover:scale-105 transition-transform duration-200 text-main hover:text-black mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='hover:scale-105 transition-transform duration-200 text-smokeGrey mr-4 bg-main px-3 py-2 rounded-full m-1'
            >
              Sign Up
            </Link>
          </>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/'/>
        </div>
      </div>
    </nav>
  );
};

export default Header;