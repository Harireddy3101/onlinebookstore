import anime from 'animejs';
import type { FC } from 'react';
import { memo, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import classes from './ProductDetails.module.css';
import { SearchIcon } from './SearchIcon.js';

interface Props {
  className?: string;
}

interface BookData {
  bookId: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

export const ProductDetails: FC<Props> = memo(function ProductDetails(props = {}) {
  const location = useLocation();
  const navigate = useNavigate();
  const bookData = location.state as BookData;
  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const priceRef = useRef(null);
  const addToCartRef = useRef(null);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Product image animation - fade in and slight rotation
    anime({
      targets: imageRef.current,
      opacity: [0, 1],
      rotateY: [-10, 0],
      duration: 1000,
      easing: 'easeOutSine'
    });

    // Product details animation - slide in from right
    anime({
      targets: detailsRef.current,
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 200,
      easing: 'easeOutCubic'
    });

    // Price animation - pop up
    anime({
      targets: priceRef.current,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 600,
      delay: 400,
      easing: 'spring(1, 80, 10, 0)'
    });

    // Add to cart button animation - slide up
    anime({
      targets: addToCartRef.current,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: 600,
      easing: 'easeOutCubic'
    });

    // Book description text reveal
    anime({
      targets: '.bookDescription p',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(300),
      duration: 1000,
      easing: 'easeOutQuad'
    });

    // Related books carousel slide
    anime({
      targets: '.relatedBook',
      translateX: [-100, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      duration: 800,
      easing: 'easeOutCubic'
    });

    // Author info panel slide up
    anime({
      targets: '.authorInfo',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 800,
      easing: 'easeOutExpo'
    });
  }, []);

  if (!bookData) {
    return <div>No product details available</div>;
  }

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div 
        ref={imageRef}
        className={classes.image8}
        style={{
          backgroundImage: `url(${bookData.imageUrl})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className={classes.container1}>
        <div className={classes.contactSupportCollaborateWithU}>
          <div className={classes.textBlock}>Contact support</div>
          <div className={classes.textBlock2}>Collaborate with us</div>
          <div className={classes.textBlock3}>List your bookstore</div>
          <div className={classes.textBlock4}>Become a delivery</div>
        </div>
        <div className={classes.exploreOurArticlesPurchaseGift}>
          <div className={classes.textBlock5}>Explore our articles</div>
          <div className={classes.textBlock6}>Purchase gift card</div>
          <div className={classes.textBlock7}>Local bookstores</div>
          <div className={classes.textBlock8}>First order discount</div>
        </div>
        <div className={classes.dISCOVERBOOKS}>BookHaven</div>
        <div className={classes.recommendationBookstagramBook}>
          <div className={classes.textBlock9}>Recommendation</div>
          <div className={classes.textBlock10}>Bookstagram</div>
          <div className={classes.textBlock11}>Book</div>
        </div>
        <div className={classes.social}>Social</div>
      </div>

      <div className={classes.textbox1}>
        <div className={classes.searchAuthorOrTitle}>Search author or title</div>
        <div className={classes.search}>
          <SearchIcon className={classes.icon} />
        </div>
      </div>

      <div className={classes.sciFiAdventureExcitingSpaceJou}>
        <div ref={detailsRef} className={classes.textBlock12}>{bookData.title}</div>
        <div className={classes.textBlock13}>{bookData.description}</div>
      </div>

      <div className={classes.bOOKDETAILS}>{bookData.title}</div>
      <div ref={priceRef} className={classes._1299}>{bookData.price}</div>

      <button ref={addToCartRef} className={classes.button1}>
        <div className={classes.buyNow}>Buy Now</div>
      </button>
      <button className={classes.button2}>
        <div className={classes.addToCart}>Add to Cart</div>
      </button>

      <div className={classes.container3} onClick={handleBack}>
        <div className={classes.back}>Back</div>
        <div className={classes.caretLeft1}>
          <SearchIcon className={classes.icon} />
        </div>
      </div>

      <div className={classes.bestseller}>Bestseller</div>

      <button className={classes.button4}>
        <div className={classes.biography}>biography</div>
      </button>

      <div className={classes.genres}>Genres</div>

      <button className={classes.button7}>
        <div className={classes.fiction}>fiction</div>
      </button>
    </div>
  );
});
