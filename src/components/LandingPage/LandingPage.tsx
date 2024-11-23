import anime from 'animejs';
import type { FC } from 'react';
import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { CaretDown1Icon } from './CaretDown1Icon.js';
import { CaretDown2Icon } from './CaretDown2Icon.js';
import { CaretDown3Icon } from './CaretDown3Icon.js';
import classes from './LandingPage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3:583 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const titleRef = useRef(null);
  const heroImageRef = useRef(null);
  const ctaButtonRef = useRef(null);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/SearchProducts`);
    }
  };

  useEffect(() => {
    // Title animation - slide in from left with fade
    anime({
      targets: titleRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo'
    });

    // Hero image animation - scale up and fade in
    anime({
      targets: heroImageRef.current,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1000,
      delay: 300,
      easing: 'easeOutCubic'
    });

    // CTA button animation - bounce effect
    anime({
      targets: ctaButtonRef.current,
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 600,
      easing: 'spring(1, 80, 10, 0)'
    });
  }, []);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container21}>
        <div 
          className={classes.bookHaven} 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          BookHaven
        </div>
        <div className={classes.exploreOurArticlesPurchaseGift}>
          <div className={classes.textBlock}>Explore our articles</div>
          <div className={classes.textBlock2}>Purchase gift card</div>
        </div>
        <div className={classes.bookstagramBook}>
          <div className={classes.textBlock3}>Bookstagram</div>
          <div className={classes.textBlock4}>Book</div>
        </div>
        <div className={classes.listYourBookstore}>List your bookstore</div>
        <div className={classes.becomeADelivery}>Become a delivery</div>
        <div className={classes.collaborateWithUs}>Collaborate with us</div>
        <div className={classes.contactSupport}>Contact support</div>
        <div className={classes.firstOrderDiscount}>First order discount</div>
        <div className={classes.recommendation}>Recommendation</div>
        <div className={classes.localBookstores}>Local bookstores</div>
        <div className={classes.social}>Social</div>
      </div>
      <div className={classes.container20}>
        <div className={classes.image47}></div>
        <div className={classes.selectABookAndAddItToYourCartY}>
          <div className={classes.textBlock5}>Select a book and add it to your cart..</div>
          <div className={classes.textBlock6}>Your next great read is just a click</div>
        </div>
        <div className={classes.addToCart}>Add to cart</div>
        <div className={classes.away}>away.</div>
      </div>
      <div className={classes.image55}></div>
      <div className={classes.image52}></div>
      <div className={classes.exploreOurCuratedBookselection}>
        <div className={classes.textBlock7}>Explore our curated book</div>
        <div className={classes.textBlock8}>selection</div>
      </div>
      <div className={classes.image54}></div>
      <div className={classes.image57}></div>
      <div className={classes.image56}></div>
      <div className={classes.image53}></div>
      <div className={classes.container19}>
        <input
          type="text"
          className={classes.searchForBooks}
          placeholder="Search for books"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <div className={classes.unnamed}>0</div>
      </div>
      <div className={classes.bookHavenSupportsBookstoreswit}>
        <div className={classes.textBlock9}>BookHaven supports bookstores</div>
        <div className={classes.textBlock10}>with online sales, loyalty programs,</div>
        <div className={classes.textBlock11}>and more.</div>
      </div>
      <div className={classes.enjoyTheFinestBooksDeliveredTo}>
        <div className={classes.textBlock12}>Enjoy the finest books delivered to your doorstep</div>
        <div className={classes.textBlock13}>with BookHaven. Discover a world of literature from</div>
      </div>
      <div className={classes.image58}></div>
      <div className={classes.enterYourSearchDiscoverNewRead}>
        <div className={classes.textBlock14}>Enter your search. Discover new reads.</div>
        <div className={classes.textBlock15}>or find your favorites easily.</div>
      </div>
      <div className={classes.earnByDeliveringBooksToEagerre}>
        <div className={classes.textBlock16}>Earn by delivering books to eager</div>
        <div className={classes.textBlock17}>readers. Just grab your bag and go.</div>
      </div>
      <div className={classes.bookHaven2}>BookHaven</div>
      <button className={classes.button26}>
        <div className={classes.partnerWithUs}>Partner with us</div>
      </button>
      <div className={classes.contributeToBuildingAPremierbo}>
        <div className={classes.textBlock18}>Contribute to building a premier</div>
        <div className={classes.textBlock19}>book delivery service.</div>
      </div>
      <div className={classes.reviewYourSelectionGetReadyTod}>
        <div className={classes.textBlock20}>Review your selection. Get ready to</div>
        <div className={classes.textBlock21}>dive into the world of words</div>
      </div>
      <button className={classes.button27}>
        <div className={classes.joinUs}>Join us</div>
      </button>
      <button className={classes.button28}>
        <div className={classes.deliverWithUs}>Deliver with us</div>
      </button>
      <button className={classes.button29}>
        <div className={classes.getApp}>Get app</div>
      </button>
      <button 
        className={classes.button30}
        onClick={() => navigate('/signup')}
      >
        <div className={classes.signUp}>Sign up</div>
      </button>
      <button 
        className={classes.button31}
        onClick={() => navigate('/signin')}
      >
        <div className={classes.signIn}>Sign in</div>
      </button>
      <button 
        className={classes.button32}
        onClick={handleSearch}
      >
        <div className={classes.search}>Search</div>
      </button>
      <div className={classes.howBookHavenWorks}>How BookHaven works</div>
      <div className={classes.joinBookHavenTeam}>Join BookHaven team</div>
      <div className={classes.findYourFavorite}>Find your favorite</div>
      <div className={classes.shopEffortlessly}>Shop effortlessly</div>
      <div className={classes.becomeAPartner}>Become a partner</div>
      <div className={classes.getOurAppNow}>Get our app now</div>
      <div className={classes.proceedToCheckout}>Proceed to checkout</div>
      <div className={classes.becomeABook}>Become a book</div>
      <div className={classes.joinOurTeam}>Join our team</div>
      <div className={classes.variousGenres}>various genres.</div>
      <div className={classes.caretDown1}>
        <CaretDown1Icon className={classes.icon} />
      </div>
      <div className={classes.caretDown2}>
        <CaretDown2Icon className={classes.icon2} />
      </div>
      <div className={classes.caretDown3}>
        <CaretDown3Icon className={classes.icon3} />
      </div>
    </div>
  );
});
