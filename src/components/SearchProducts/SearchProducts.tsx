import type { FC } from 'react';
import { memo } from 'react';

import resets from '../_resets.module.css';
import classes from './Search.module.css';
import { SearchIcon } from './SearchIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 3:765 */
export const SearchProducts: FC<Props> = memo(function SearchProducts(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container18}>
        <div className={classes.image45}></div>
        <div className={classes.image48}></div>
        <div className={classes.image39}></div>
        <div className={classes.image33}></div>
        <div className={classes.image42}></div>
        <div className={classes.image38}></div>
        <button className={classes.button19}>
          <div className={classes.bestsellers}>Bestsellers</div>
        </button>
        <button className={classes.button20}>
          <div className={classes.newReleases}>New Releases</div>
        </button>
        <button className={classes.button21}>
          <div className={classes.recommended}>Recommended</div>
        </button>
        <button className={classes.button22}>
          <div className={classes.nonFiction}>Non-Fiction</div>
        </button>
        <button className={classes.button23}>
          <div className={classes.fiction}>Fiction</div>
        </button>
        <div className={classes.prideAndPrejudice}>Pride and Prejudice</div>
        <div className={classes.container8}>
          <div className={classes.image32}></div>
          <div className={classes._24}>24</div>
        </div>
        <div className={classes.container9}>
          <div className={classes.image41}></div>
          <div className={classes._19}>19</div>
        </div>
        <div className={classes.image40}></div>
        <div className={classes.image35}></div>
        <div className={classes.janeAustenSMasterpiece}>Jane Austen&#39;s masterpiece.</div>
        <div className={classes.image44}></div>
        <div className={classes.aDystopianClassic}>A dystopian classic</div>
        <div className={classes.recommendedReads}>Recommended Reads</div>
        <div className={classes.recentSearches}>Recent Searches</div>
        <div className={classes.scienceFiction}>Science Fiction</div>
        <div className={classes._1099}>$ 10.99</div>
        <div className={classes.classicNovels}>Classic Novels</div>
        <div className={classes.cookbooks}>Cookbooks</div>
        <div className={classes._1984}>1984</div>
        <div className={classes.filters}>Filters</div>
        <div className={classes._799}>7.99</div>
        <div className={classes.image50}></div>
      </div>
      <div className={classes.container17}>
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
        <div className={classes.bookHaven}>BookHaven</div>
        <div className={classes.bookstagramBook}>
          <div className={classes.textBlock8}>Bookstagram</div>
          <div className={classes.textBlock9}>Book</div>
        </div>
        <div className={classes.firstOrderDiscount}>First order discount</div>
        <div className={classes.recommendation}>Recommendation</div>
        <div className={classes.social}>Social</div>
      </div>
      <div className={classes.container13}>
        <div className={classes.image37}></div>
        <button className={classes.button24}>
          <div className={classes._242}>24</div>
        </button>
        <div className={classes.theGreatGatsby}>The Great Gatsby</div>
        <div className={classes.aTimelessClassic}>A timeless classic.</div>
        <div className={classes._1299}>$ 12.99</div>
      </div>
      <div className={classes.container14}>
        <div className={classes.image34}></div>
        <div className={classes.theCatcherInTheRye}>The Catcher in the Rye</div>
        <div className={classes.container10}>
          <div className={classes.image51}></div>
          <div className={classes._243}>24</div>
        </div>
        <div className={classes.holdenCaulfieldSJourney}>Holden Caulfield&#39;s journey.</div>
        <div className={classes._899}>$ 8.99</div>
      </div>
      <div className={classes.container15}>
        <div className={classes.image43}></div>
        <div className={classes.toKillAMockingbird}>To Kill a Mockingbird</div>
        <button className={classes.button25}>
          <div className={classes._13}>13</div>
        </button>
        <div className={classes.aMustReadForAllAges}>A must-read for all ages.</div>
        <div className={classes._999}>$ 9.99</div>
      </div>
      <div className={classes.container16}>
        <div className={classes.image36}></div>
        <div className={classes.container11}>
          <div className={classes.image46}></div>
          <div className={classes._30}>30</div>
        </div>
        <div className={classes.aFableAboutFollowingYourDreams}>A fable about following your dreams.</div>
        <div className={classes.theAlchemist}>The Alchemist</div>
        <div className={classes._1499}>14.99</div>
        <div className={classes.image49}></div>
      </div>
      <div className={classes.container12}>
        <div className={classes.headerMenu1}>
          <div className={classes.frame}>
            <div className={classes.categories}>Categories</div>
          </div>
          <div className={classes.frame2}>
            <div className={classes.authors}>Authors</div>
          </div>
          <div className={classes.frame3}>
            <div className={classes.genres}>Genres</div>
          </div>
          <div className={classes.frame4}>
            <div className={classes.discoun}>Discoun</div>
          </div>
        </div>
        <div className={classes.textbox2}>
          <div className={classes.searchForBooksByTitleAuthorOrG}>Search for books by title, author, or genre</div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.avatar1}>
          <div className={classes.rectangle}></div>
        </div>
      </div>
      <button className={classes.button18}>
        <div className={classes.more}>More</div>
      </button>
    </div>
  );
});
