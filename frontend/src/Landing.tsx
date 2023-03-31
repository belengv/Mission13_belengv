import React from 'react';
import styles from './Landing.module.css';

//This function displays Joel picture as well as the description of his site
function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-1">
          <img src="./jh.jpeg" alt="Joel Hilton" className={styles.logo} />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.title}</h1>
        </div>
        <div>
          <p className={styles.p}>
            This site stores Joel Hilton's Movies Collection including only his
            favorites movies of all times!
            <br />
            Check this out in case you are wondering what movies to watch
            next...
          </p>
        </div>
      </div>
    </>
  );
}
export default TopBanner;
