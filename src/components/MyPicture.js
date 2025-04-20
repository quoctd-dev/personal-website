import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import colorSharp from "../assets/img/color-sharp.png";
import pic1 from '../assets/img/picture10.jpg';
import pic2 from '../assets/img/picture11.jpg';
import pic3 from '../assets/img/picture12.jpg';
import pic4 from '../assets/img/picture13.jpg';

export const MyPicture = () => {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm')); // <600px
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900px - 1200px

    const getCols = () => {
        if (isXs) return 1;
        if (isSm) return 2;
        if (isMd) return 3;
        return 4;
    };

    const itemData = [
        { img: pic1 },
        { img: pic2 },
        { img: pic3 },
        { img: pic4 },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture1.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture2.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture3.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture4.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture5.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture6.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture7.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture8.jpg' },
        { img: 'https://trandangquoc-271202.web.app/assets/img/portfolio/picture9.jpg' },
    ];

    const handleOpen = (img) => {
        setSelectedImg(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImg(null);
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>My Picture</h2>
                            <p>These are more than just pictures – they’re moments frozen in time, each with its own
                                story to tell.<br/>
                                This gallery reflects my journey, filled with passion, creativity, and unforgettable
                                memories.<br/>
                                Every image captures a unique emotion, a glimpse of a moment that words alone could
                                never fully express.</p>
                            <ImageList variant="masonry" cols={getCols()} gap={8}>
                                {itemData.map((item, index) => (
                                    <ImageListItem key={index} onClick={() => handleOpen(item.img)}
                                                   style={{cursor: 'pointer'}}>
                                        <img
                                            src={item.img}
                                            alt={`img-${index}`}
                                            loading="lazy"
                                            style={{width: '100%', display: 'block', borderRadius: '8px'}}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: '100px'}}>
                <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <IconButton
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                zIndex: 10
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <img
                            src={selectedImg}
                            alt="Full Size"
                            style={{
                                width: '100%',
                                height: '100%',
                                maxHeight: '80vh',
                                objectFit: 'contain',
                                display: 'block',
                                margin: '0 auto',
                                borderRadius: '8px'
                            }}
                        />
                    </div>
                </Dialog>
            </div>

            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
};
