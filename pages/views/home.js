import React from 'react';

import AppAbout from '../components/home/about';
import AppContact from '../components/home/contact';
import AppFaq from '../components/home/faq';

function AppHome() {
  return (
    <div className="main">
      <AppAbout/>
      <AppContact/>
      <AppFaq/>
    </div>
  );
}

export default AppHome;