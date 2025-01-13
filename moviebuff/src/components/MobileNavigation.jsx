import React from 'react';
import { NavLink } from 'react-router-dom';
import { mobileNavigation } from '../constants/navigation';

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full'>
      <div className='flex items-center justify-around h-full'>
        {(mobileNavigation || []).map((nav, index) => (
          <NavLink 
            key={index} 
            to={nav.href}
            className={({ isActive }) => `
              hover:text-neutral-200 flex flex-col items-center gap-1
              transition-colors duration-200
              ${isActive ? 'text-neutral-200' : 'text-neutral-500'}
            `}
          >
            <div className="text-xl">
              {nav.icon}
            </div>
            <span className="text-xs">
              {nav.label}
            </span>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;