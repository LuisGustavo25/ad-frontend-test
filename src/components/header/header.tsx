//Header Component
import React from 'react';
import {ShopIcon} from '@/icons';

const Header: React.FC = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <h1>GamerShop</h1>
            <ShopIcon style={{ marginRight: '10px', width: '52px', height: '45px' }} />
        </header>
    );
};

export default Header;