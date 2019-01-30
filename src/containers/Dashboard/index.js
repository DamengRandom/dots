import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../Navbar';

const Dashboard = () => {
  const title = "Dots ..";
  const links = [
    { name: 'Dashboard', url: '/' },
    { name: 'Create Dot', url: '/create-dot' },
  ];
  return (
    <div>
      <Navbar title={title} links={links} />
      <Link to="/create-dot">Create Dot</Link>
      <section>Dashboard</section>
    </div>
  )
}

export { Dashboard };
