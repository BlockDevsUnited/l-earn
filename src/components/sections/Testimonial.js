import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '"Connecting people and cryptocurrencies with education"',
    paragraph: 'Our platform lets people learn about crypto while earning some at the same time. It lets cryptocurrency organizations fund educational programs to teach people, and gain new users. Join our pilot phase by completing the tutorial bounties below and connect with us on Telegram.'
  };

  return (
    
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div className="reveal-from-right" data-reveal-delay="4100">
          <SectionHeader data={sectionHeader} className="center-content"/>
          </div>

          <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tutorial #1
                    </h4>
                  <p className="m-0 text-sm">
                    Set up an Ethereum Wallet.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tutorial #2
                    </h4>
                  <p className="m-0 text-sm">
                    Make a XDAI transaction.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tutorial #3
                    </h4>
                  <p className="m-0 text-sm">
                    Understand what cold storage is and how to use it.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <div className={tilesClasses} >
          {/* bounty #1 */}
            <div className="tiles-item reveal-from-right" data-reveal-delay="4000">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-2">
                  <strong>1. Prove your ID</strong>
                  </p>
                  <p className="text-sm mb-0">
                     As part of our pilot program, if you sign up with us and can <strong> prove you are living in Venezuela, you'll earn $10!</strong> This is on a first-come-first-serve basis during the pilot phase.
                  </p>
                  <p><span role="img" aria-label="sign-up">👋😁</span> </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">$10 reward</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://bdu.dev/">Hunt Bounty</a>
                  </span>
                </div>
              </div>
            </div>
          
          {/* bounty #2 */}
            <div className="tiles-item reveal-from-right" data-reveal-delay="4400">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-2">
                  <strong>2. Create a Wallet</strong>
                  </p>
                  <p className="text-sm mb-0">
                    Complete this tutorial on <strong>creating an Ethereum wallet and earn $10. </strong> You can submit your proofs by following the instructions detailed in the bounty description.               
                  </p>
                  <p><span role="img" aria-label="sign-up">💻</span> </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">$10 reward</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://bdu.dev/">Hunt Bounty</a>
                  </span>
                </div>
              </div>
            </div>

          {/* bounty #3 */}
            <div className="tiles-item reveal-from-right" data-reveal-delay="4800">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-2">
                  <strong>3. Hunt "learning bounties"</strong>
                  </p>
                  <p className="text-sm mb-0">
                  Complete this tutorial on <strong>creating a smart contract with your own customized logic.</strong> You can submit your proofs by following the instructions detailed in the bounty description.
                  </p>
                  <p><span role="img" aria-label="laptop">🤓</span> </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">$10 reward</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://bdu.dev/">Hunt Bounty</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;