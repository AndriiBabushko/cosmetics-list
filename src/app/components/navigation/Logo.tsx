import { NavLink } from 'react-router-dom';
import { pages } from '../../lib/constants';
import { FaTshirt } from 'react-icons/fa';

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => {
  return (
    <NavLink to={pages.home} className={`flex items-center no-underline text-white ${className}`}>
      <FaTshirt className={'mr-3 w-8 h-8'} />
      <span className={'self-center whitespace-nowrap text-xl font-semibold'}>Cosmetics App</span>
    </NavLink>
  );
};
