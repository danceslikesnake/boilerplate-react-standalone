/**
 *
 * Logo
 *
 */

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import startLogoNoise from 'javascript/logoEffect';

import desktopLogo from '../../images/home-logo-500.png';
import mobileLogo from '../../images/home-logo.png';

class Logo extends PureComponent {
  componentDidMount() {
    startLogoNoise();
  }

  render() {
    return (
      <>
        <canvas id="canvas" className="logo__animation" />
        <div className="logo">
          <div className="logo__contentWrapper">
            <div className="logo__mask">
              <img
                className="logo__maskImage -desktop"
                src={desktopLogo}
                alt="Homepage Logo Mask"
              />
              <img
                className="logo__maskImage -mobile"
                src={mobileLogo}
                alt="Homepage Logo Mask"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

Logo.propTypes = {};

export default Logo;
