import React from 'react';
import AdditionalServices from './components/AdditionalServices/AdditionalServices';
import Header from './components/Header/Header';
import OurWork from './components/OurWork/OurWork';
// import PricingTable from './components/PricingTable/PricingTable';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LastUpdates from 'components/LastUpdates/LastUpdates';
import Testimonials from 'components/Testimonials/Testimonials';
import OurLockation from 'components/OurLockation/OurLockation';
import Footer from 'components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <OurWork />
            {/* <PricingTable /> */}
            <AdditionalServices />
            <LastUpdates />
            <Testimonials />
            <OurLockation />
            <Footer />
        </div>
    );
}

export default App;
