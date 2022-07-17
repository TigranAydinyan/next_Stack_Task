import React, { useCallback, useEffect, useState } from 'react';

// function ImageContainer({ image, className, alt }) {
//     const [imgSrc, setSrc] = useState('');

//     const onLoad = useCallback(() => {
//         console.log('aaaaaaaaaaaa');
//         setSrc(image);
//     }, [image]);

//     useEffect(() => {
//         const img = new Image();
//         img.src = image;
//         img.addEventListener('load', onLoad);

//         return () => {
//             img.removeEventListener('load', onLoad);
//         };
//     }, [image, onLoad]);

//     return imgSrc && <img src={imgSrc} alt={alt} className={className} />;
// }

// export default ImageContainer;

const lazyLoader = (importComp) => {
    return <Component importComp={importComp} />;
};

const Component = ({ importComp }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        importComp().then((comp) => setImage(comp.default));
    }, []);

    return image ? <img src={image} /> : null;
};
export default lazyLoader;
