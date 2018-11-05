import React from 'react';
import ImageZoom from 'react-medium-image-zoom';


import styles from './styles.scss';
import {IScheduleData} from 'src/store/reducers/actionTypes';
import noImage from './noImage.png';


export const Image = ({item}: IProps) => (
    <div className={styles.image}>
        <ImageZoom
            image={{
                //делаем https (heroku ругется) - изначально в image http
                src: item.show.image ? `https${item.show.image.medium.slice(4)}` : noImage,
                alt: item.show.name,
            }}
            zoomImage={{
                src: item.show.image ? `https${item.show.image.original.slice(4)}` : noImage,
                alt: item.show.name
            }}
            defaultStyles={{
                overlay: {backgroundColor: 'black', opacity: 0.7}
            }}
        />
    </div>
);


interface IProps {
    item: IScheduleData;
}
