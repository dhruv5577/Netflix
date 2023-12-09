import React, { useRef, useState } from 'react'
import "./Item.scss"
import { Add, KeyboardArrowLeft, KeyboardArrowRight, PlayArrow, FavoriteBorderOutlined } from '@material-ui/icons'
export default function Item() {
    const [sliden, setSliden] = useState(0);
    const [moved, setMoved] = useState(false);
    const [hovers, setHovers] = useState(false);
    const target = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

    const listR = useRef();


    const handleclick = (direction) => {
        setMoved(true);

        let position = listR.current.getBoundingClientRect().x - 68;
        if (direction === "L" && sliden > 0) {
            setSliden(sliden - 1);
            listR.current.style.transform = `translateX(${260 + position}px)`;

        }
        if (direction === "R" && sliden < 3) {
            setSliden(sliden + 1);
            listR.current.style.transform = `translateX(${-260 + position}px)`;

        }

    }
    return (
        <div className='item'>
            <span className="title">Continue to Watch</span>
            <div className="concurrent">
                <KeyboardArrowLeft className='Arrow L' onClick={() => handleclick("L")} style={{ display: !moved && "none" }} />

                <div className="container" ref={listR}>

                    <div className="list" style={{ left: hovers && 0 * 250 - 45 }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>
                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 1 * 250 - 45 + (1 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>
                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 2 * 250 - 45 + (2 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>

                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 3 * 250 - 45 + (3 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>

                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 4 * 250 - 45 + (4 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>

                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 5 * 250 - 45 + (5 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>
                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 6 * 250 - 45 + (6 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>
                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 7 * 250 - 45 + (7 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <video src={target} autoPlay={true} loop />
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>

                            </>)}

                    </div>
                    <div className="list" style={{ left: hovers && 8 * 250 - 45 + (8 * 5) }} onMouseEnter={() => setHovers(true)} onMouseLeave={() => setHovers(false)}>
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" alt="" />
                        {hovers && (
                            <>
                                <div className="iteminfo">
                                    <div className="icons">
                                        <PlayArrow className="symbol" />
                                        <Add className="symbol" />
                                        <FavoriteBorderOutlined className="symbol" />
                                    </div>
                                    <div className="info">
                                        <span>1 Hour 49 Minutes</span>
                                        <span className='Age'>+16</span>
                                        <span>2020</span>

                                    </div>
                                    <div className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores harum laudantium? Eaque minima voluptatibus vero iusto!
                                    </div>
                                    <div className="genre">Drama </div>
                                </div>
                            </>)}

                    </div>




                </div>
                <KeyboardArrowRight className='Arrow R' onClick={() => handleclick("R")} />
            </div>
        </div>
    )
}
