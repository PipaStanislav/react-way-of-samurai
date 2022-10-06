import styles from './News.module.css';

const News = () => {
  return (
    <div className={ styles.news }>
      <iframe className={styles.newsIframe} src="https://www.bbc.com/" title={ 'News' }></iframe>
    </div>
  )
}

export default News;