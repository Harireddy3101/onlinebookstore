import type { FC } from 'react';
import { memo } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { ArrowSmRight1Icon } from './ArrowSmRight1Icon.js';
import { ArrowSmRight2Icon } from './ArrowSmRight2Icon.js';
import { CaretLeft1Icon } from './CaretLeft1Icon.js';
import { CaretRight1Icon } from './CaretRight1Icon.js';
import classes from './Discover.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3:660 */
export const Discover: FC<Props> = memo(function Discover(props = {}) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleBookClick = (bookId: string, title: string, price: string, description: string, imageUrl: string) => {
    navigate('/productdetails', {
      state: {
        bookId,
        title,
        price,
        description,
        imageUrl
      }
    });
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container7}>
        <div 
          className={classes.image31}
          onClick={() => handleBookClick(
            'book1',
            'Classic Novel',
            '$15.00',
            'A timeless classic that has captivated readers for generations.',
            '/Discover_assets/image31.png'
          )}
          role="button"
          tabIndex={0}
          aria-label="View Classic Novel details"
        ></div>
        <div 
          className={classes.image21}
          onClick={() => handleBookClick(
            'book2',
            'Biographies & Memoirs',
            '$12.99',
            'Inspiring life stories that motivate and enlighten.',
            '/Discover_assets/image21.png'
          )}
          role="button"
          tabIndex={0}
          aria-label="View Biographies & Memoirs details"
        ></div>
        <div 
          className={classes.image10}
          onClick={() => handleBookClick(
            'book3',
            'Science Fiction novels',
            '$21.90',
            'Journey through space and time in this thrilling sci-fi adventure.',
            '/Discover_assets/image10.png'
          )}
          role="button"
          tabIndex={0}
          aria-label="View Science Fiction details"
        ></div>
        <div className={classes.image22}></div>
        <div className={classes.image13}></div>
        <div className={classes.image16}></div>
        <div className={classes.image9}></div>
        <div className={classes.image12}></div>
        <div className={classes.image20}></div>
        <div className={classes.image23}></div>
        <div className={classes.image15}></div>
        <div className={classes.bestsellersOfTheMonth}>Bestsellers of the Month</div>
        <div className={classes.biographiesMemoirs}>Biographies &amp; Memoirs</div>
        <div className={classes.scienceFictionNovels}>Science Fiction novels</div>
        <div className={classes.romanceNovels}>Romance novels</div>
        <div className={classes.thrillerNovels}>Thriller novels</div>
        <div className={classes._159}>$15.9</div>
        <div className={classes._999}>$9.99</div>
        <div className={classes._219}>$21.9</div>
        <div className={classes.genres}>Genres</div>
        <div className={classes.classicNovel}>Classic Novel</div>
        <div className={classes._15}>$15.</div>
        <div className={classes._12}>$12.</div>
        <div className={classes.image26}></div>
        <div className={classes.image25}></div>
        <div className={classes.disc}>Disc</div>
        <div className={classes._245}>245</div>
        <div className={classes.arrowSmRight1}>
          <ArrowSmRight1Icon className={classes.icon} />
        </div>
        <div className={classes.arrowSmRight2}>
          <ArrowSmRight2Icon className={classes.icon2} />
        </div>
        <div className={classes._17}>17</div>
        <div className={classes._14}>14</div>
        <div className={classes._87}>87</div>
      </div>
      <div className={classes.container6}>
        <div className={classes.image11}></div>
        <div className={classes.image14}></div>
        <div className={classes.image17}></div>
        <div className={classes.image18}></div>
        <div className={classes.image19}></div>
        <div className={classes.newReleases}>New releases</div>
        <div className={classes.poetryBooks}>Poetry books</div>
        <div className={classes.historicalFiction}>Historical fiction</div>
        <div className={classes._2999}>$29.99</div>
        <div className={classes._1450}>$14.50</div>
        <div className={classes.dramaPlays}>Drama plays</div>
        <div className={classes.classicNovels}>Classic novels</div>
        <div className={classes._799}>$7.99</div>
        <div className={classes._499}>$4.99</div>
        <div className={classes._109}>$10.9</div>
        <div className={classes.boxedSets}>Boxed sets</div>
        <div className={classes.image28}></div>
        <div className={classes.image30}></div>
        <div className={classes.image27}></div>
        <div className={classes.image29}></div>
        <div className={classes.caretRight1}>
          <CaretRight1Icon className={classes.icon3} />
        </div>
        <div className={classes._98}>98</div>
        <div className={classes._32}>32</div>
        <div className={classes._11}>11</div>
        <div className={classes._62}>62</div>
      </div>
      <div className={classes.container5}>
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
          className={classes.bookHaven}
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
      <div className={classes.image24}></div>
      <div className={classes.container4}>
        <div className={classes.headerIcons}>
          <FaShoppingCart 
            className={classes.cartIcon} 
            onClick={handleCartClick}
            role="button"
            aria-label="Go to cart"
          />
          <FaUser className={classes.userIcon} />
        </div>
        <div 
          className={classes.bookHaven2}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          BookHaven
        </div>
      </div>
      <div className={classes.container3}>
        <div className={classes.back}>Back</div>
        <div className={classes.caretLeft1}>
          <CaretLeft1Icon className={classes.icon4} />
        </div>
      </div>
    </div>
  );
});
