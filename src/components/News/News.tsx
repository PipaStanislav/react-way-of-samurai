import styles from './News.module.css';
import { FC } from 'react';

type ParamsType = {}

const News: FC<ParamsType> = (params): JSX.Element => {
  return (
    <div className={ styles.news }>
      <iframe className={styles.newsIframe} src="https://www.bbc.com/" title={ 'News' }></iframe>
    </div>
  )
}

export default News;