import Banner from 'components/Banner';
import { Outlet } from 'react-router-dom';

export default function MainStructure() {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
}
