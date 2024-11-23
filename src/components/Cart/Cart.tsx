import { AccountCircle } from '@mui/icons-material';
import anime from 'animejs';
import type { FC } from 'react';
import { memo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import classes from './Cart.module.css';
import { DownArrow1Icon } from './DownArrow1Icon.js';
import { EAddIcon } from './EAddIcon.js';
import { SearchIcon } from './SearchIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:864 */
export const Cart: FC<Props> = memo(function Cart(props = {}) {
  const navigate = useNavigate();
  const cartItemsRef = useRef(null);
  const totalRef = useRef(null);
  const checkoutRef = useRef(null);

  useEffect(() => {
    // Cart items animation - stagger appearance
    anime({
      targets: '.cartItem',
      translateX: [-100, 0],
      opacity: [0, 1],
      delay: anime.stagger(150),
      duration: 800,
      easing: 'easeOutQuad'
    });

    // Total amount animation - fade in and scale
    anime({
      targets: totalRef.current,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 600,
      delay: 400,
      easing: 'easeOutCubic'
    });

    // Checkout button animation - bounce in
    anime({
      targets: checkoutRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: 'spring(1, 80, 10, 0)'
    });

    // Empty cart message animation (if cart is empty)
    anime({
      targets: '.emptyCartMessage',
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .8)'
    });

    // Cart item quantity counter animation
    anime({
      targets: '.quantityCounter',
      scale: [1.2, 1],
      duration: 400,
      easing: 'spring(1, 80, 10, 0)'
    });

    // Remove item button hover effect
    anime({
      targets: '.removeButton',
      scale: 1.1,
      duration: 200,
      easing: 'easeInOutQuad',
      autoplay: false
    });

    // Cart summary panel slide in
    anime({
      targets: '.cartSummary',
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 200,
      easing: 'easeOutQuad'
    });
  }, []);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleDiscoverClick = () => {
    navigate('/discover');
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.header}>
        <div 
          className={classes.yOURBOOKS} 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          BookHaven
        </div>
        <button className={classes.discoverButton} onClick={handleDiscoverClick}>
          <div className={classes.discoverText}>Discover</div>
        </button>
        <div className={classes.accountIcon}>
          <AccountCircle />
        </div>
      </div>
      <div className={classes.image60}></div>
      <div className={classes.container23}>
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
        </div>
        <div 
          className={classes.dISCOVERBOOKS}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          BookHaven
        </div>
        <div className={classes.bookstagramBook}>
          <div className={classes.textBlock8}>Bookstagram</div>
          <div className={classes.textBlock9}>Book</div>
        </div>
        <div className={classes.firstOrderDiscount}>First order discount</div>
        <div className={classes.recommendation}>Recommendation</div>
        <div className={classes.social}>Social</div>
      </div>
      <div className={classes.container22}>
        <button className={classes.button33}>
          <div className={classes.checkout}>Checkout</div>
        </button>
        <button className={classes.button37}>
          <div className={classes._1}>1</div>
          <div className={classes.eAdd}>
            <EAddIcon className={classes.icon} />
          </div>
        </button>
        <div className={classes.shoppingCart}>Shopping cart</div>
        <div className={classes._1299399}>
          <div className={classes.textBlock10}>$12.99</div>
          <div className={classes.textBlock11}>$3.99</div>
        </div>
        <div className={classes.scienceFictionNovel}>Science Fiction Novel</div>
        <div className={classes.deliveryFee}>Delivery fee</div>
        <div className={classes.subtotal}>Subtotal</div>
        <div className={classes._1698}>$16.98</div>
        <div className={classes._1299}>$12.99</div>
        <div className={classes.quantity}>Quantity</div>
        <div className={classes.total}>Total</div>
      </div>
      <div className={classes.image59}></div>
      <div className={classes.image63}></div>
      <div className={classes.image61}></div>
      <div className={classes.image62}></div>
      <div className={classes.textbox3}>
        <div className={classes.shippingAddress}>Shipping address</div>
        <div className={classes.search}>
          <SearchIcon className={classes.icon2} />
        </div>
      </div>
      <div className={classes.richHistoricalSettingWithCompe}>
        <div className={classes.textBlock12}>Rich historical setting with compelling</div>
        <div className={classes.textBlock13}>characters.</div>
      </div>
      <div className={classes.excitingSpaceAdventureWithAlie}>
        <div className={classes.textBlock14}>Exciting space adventure with alien</div>
        <div className={classes.textBlock15}>encounters</div>
      </div>
      <div className={classes.suspensefulPlotWithUnexpectedt}>
        <div className={classes.textBlock16}>Suspenseful plot with unexpected</div>
        <div className={classes.textBlock17}>twists and turns.</div>
      </div>
      <button className={classes.button36}>
        <div className={classes.search2}>Search</div>
      </button>
      <div className={classes.bestsellers}>Bestsellers</div>
      <div 
        className={classes.yOURBOOKS}
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        BookHaven
      </div>
      <button className={classes.button38}>
        <div className={classes.biography}>biography</div>
      </button>
      <div className={classes.historicalFictionBook}>Historical Fiction Book</div>
      <button className={classes.button39}>
        <div className={classes.nonFiction}>non-fiction</div>
      </button>
      <div className={classes.scienceFictionNovel2}>Science Fiction Novel</div>
      <div className={classes.mysteryThriller}>Mystery Thriller</div>
      <button className={classes.button40}>
        <div className={classes.fiction}>fiction</div>
      </button>
      <button className={classes.button41}>
        <div className={classes.history}>history</div>
      </button>
      <button className={classes.button42}>
        <div className={classes.popular}>popular</div>
      </button>
      <button className={classes.button43}>
        <div className={classes.popular2}>popular</div>
      </button>
      <button className={classes.button44}>
        <div className={classes.popular3}>popular</div>
      </button>
      <button className={classes.button45}>
        <div className={classes.popular4}>popular</div>
      </button>
      <div className={classes.actionAdventureNovel}>Action Adventure Novel</div>
      <div className={classes.fantasyEpic}>Fantasy Epic</div>
      <div className={classes.genres}>Genres</div>
      <div className={classes._12992}>$12.99</div>
      <div className={classes._1050}>$10.50</div>
      <div className={classes._1425}>$14.25</div>
      <div className={classes._999}>$9.99</div>
      <div className={classes.downArrow1}>
        <DownArrow1Icon className={classes.icon3} />
      </div>
      <div className={classes.cartItem} onClick={() => handleProductClick('product-id')}>
        {/* Cart item content */}
      </div>
    </div>
  );
});
