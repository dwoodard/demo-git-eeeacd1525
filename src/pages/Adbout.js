import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AdboutSectionNavigations1 from '../components/navigations/AdboutSectionNavigations1';
import AdboutSectionTestimonials2 from '../components/testimonials/AdboutSectionTestimonials2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Adbout() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AdboutSectionNavigations1 />
      <AdboutSectionTestimonials2 />
    </React.Fragment>
  );
}

