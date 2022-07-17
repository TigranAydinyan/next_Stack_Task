import React, { useState } from 'react';
import image1 from '../../../../assets/images/SlideVideo/image1.png';
import image2 from '../../../../assets/images/SlideVideo/image2.png';
import image3 from '../../../../assets/images/SlideVideo/image3.png';
import image5 from '../../../../assets/images/SlideVideo/image5.png';
import image7 from '../../../../assets/images/SlideVideo/image7.png';
import backFon from '../../../../assets/images/SlideVideo/backFon.svg';
// import vector from '../../../../assets/images/SlideVideo/vector.svg';
// import yellowFon from '../../../../assets/images/SlideVideo/yellowFon.svg';
import next from '../../../../assets/images/SlideVideo/next.svg';
import previous from '../../../../assets/images/SlideVideo/previous.svg';

function SlidVideo() {
    const [state, setState] = useState({
        images: [
            {
                id: 1,
                img: image1,
                checked: false,
            },
            {
                id: 2,
                img: image2,
                checked: true,
            },
            {
                id: 3,
                img: image3,
                checked: false,
            },
            {
                id: 4,
                img: image1,
                checked: false,
            },
            {
                id: 5,
                img: image5,
                checked: false,
            },
            {
                id: 6,
                img: image1,
                checked: false,
            },
            {
                id: 7,
                img: image7,
                checked: false,
            },
        ],
    });

    const choosenPhoto = state.images.find((v) => v.checked);

    const changePhoto = (id) =>
        setState((state) => {
            return {
                ...state,
                images: state.images.map((v) => {
                    return {
                        id: v.id,
                        img: v.img,
                        checked: v.id === id ? true : false,
                    };
                }),
            };
        });

    const nextPhoto = () => {
        const findPhoto = state.images.find((v) => v.checked);

        function findCheckedId(checked) {
            if (checked.id === state.images[state.images.length - 1].id) {
                return 0;
            }
            return state.images.find((v) => v.checked).id;
        }

        return setState((state) => {
            return {
                ...state,
                images: state.images.map((v) => {
                    return {
                        id: v.id,
                        img: v.img,
                        checked: findCheckedId(findPhoto) === v.id - 1 ? true : false,
                    };
                }),
            };
        });
    };

    const previousPhoto = () => {
        const findPhoto = state.images.find((v) => v.checked);

        function findCheckedId(checked) {
            if (checked.id === state.images[0].id) {
                return state.images[state.images.length - 1].id + 1;
            }
            return state.images.find((v) => v.checked).id;
        }

        return setState((state) => {
            return {
                ...state,
                images: state.images.map((v) => {
                    return {
                        id: v.id,
                        img: v.img,
                        checked: findCheckedId(findPhoto) === v.id + 1 ? true : false,
                    };
                }),
            };
        });
    };

    return (
        <div className="slidVideo">
            <div className="choosenPhoto">
                <img src={choosenPhoto.img} alt="" className="chekcedPhoto" />
            </div>
            <div className="photoChooseDiv">
                <div className="nextAndPrevious">
                    <img src={next} alt="" className="next" onClick={nextPhoto} />
                    <img src={previous} alt="" className="previous" onClick={previousPhoto} />
                </div>
                {state.images.map((v) => (
                    <div className="images" key={v.id} onClick={() => changePhoto(v.id)}>
                        {!v.checked && <img src={backFon} className="backFonDiv" alt="" />}
                        <img src={v.img} className="image" alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlidVideo;
