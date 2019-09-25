import React from 'react';
import { connect } from 'react-redux';


/**
 * 
 * @typedef import('../../typedefs/view').pictureProps
 */


/**
 * @function
 * @param {Object} props
 * @param {Object} props.viewParams
 * @param {pictureProps} props.pic
 */
const Picture01 = ({ viewParams, pic, }) => {

    const mbXs = viewParams.mediaBreakPoints.xs;
    const mbSm = viewParams.mediaBreakPoints.sm;
    const mbMd = viewParams.mediaBreakPoints.md;
    const mbLg = viewParams.mediaBreakPoints.lg;
    const mbXl = viewParams.mediaBreakPoints.xl;

    if (!pic.imgClass) pic.imgClass = 'card-img';

    const sources = (
        <React.Fragment>
            {pic.srcXs ? <source srcSet={pic.srcXs} media={"(min-width:" + mbXs + "px)"} /> : null}
            {pic.srcSm ? <source srcSet={pic.srcSm} media={"(min-width:" + mbSm + "px)"} /> : null}
            {pic.srcMd ? <source srcSet={pic.srcMd} media={"(min-width:" + mbMd + "px)"} /> : null}
            {pic.srcLg ? <source srcSet={pic.srcLg} media={"(min-width:" + mbLg + "px)"} /> : null}
            {pic.srcXl ? <source srcSet={pic.srcXl} media={"(min-width:" + mbXl + "px)"} /> : null}
        </React.Fragment>
    );

    return (
        <picture>
            {sources}
            <img
                src={pic.srcXs}
                alt={pic.alt}
                className={pic.imgClass}
            />
        </picture>
    );
}

const mapStateToProps = ({viewParams}) => ({viewParams});

export default connect(mapStateToProps)(Picture01);