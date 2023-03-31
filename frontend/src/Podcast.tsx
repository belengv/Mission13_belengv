import React from 'react';
import styles from './Landing.module.css';

//Podcast funtion that displays a title and redirects to joel;s podcats link
function JoelPodcast() {
  return (
    <>
      <div className="col align-self-center text-start">
        <h2 className={styles.h1}>Welcome to Podcast page</h2>
        <p className={styles.p}>
          To listen to my most recent podcast click here:{' '}
          <a href="https://baconsale.com/" target="_blank">
            My Podcast!
          </a>
        </p>
      </div>
    </>
  );
}

export default JoelPodcast;
