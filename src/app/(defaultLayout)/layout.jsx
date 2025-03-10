import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import { PostHogProvider } from "../providers";

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <PostHogProvider>
                <Header1></Header1>
                {children}
                <Footer1></Footer1>
            </PostHogProvider>
        </div>
    );
};

export default DefalultLayout;