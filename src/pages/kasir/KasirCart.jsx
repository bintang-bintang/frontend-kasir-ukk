import React from 'react';
import { useParams } from 'react-router-dom';

const KasirCart = () => {
    const { id } = useParams();

    return (
        <div>
            Ini adalah meja cart dengan ID: {id}
        </div>
    );
};

export default KasirCart;