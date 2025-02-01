import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PricesSectionNavigations1 from '../components/navigations/PricesSectionNavigations1';
import PricesSectionPricing7 from '../components/pricing/PricesSectionPricing7';
import PricesSectionPricing4 from '../components/pricing/PricesSectionPricing4';
import PricesSectionCta9 from '../components/cta/PricesSectionCta9';
import PricesSectionSignUp8 from '../components/sign-up/PricesSectionSignUp8';
import PricesSection__structures3 from '../components/__structures/PricesSection__structures3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Prices() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PricesSectionNavigations1 />
      <PricesSectionPricing7 />
      <PricesSectionPricing4 />
      <PricesSectionCta9 />
      <PricesSectionSignUp8 />
      <PricesSection__structures3 />
    </React.Fragment>
  );
}

