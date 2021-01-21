import Head from 'next/head'
import PropTypes from 'prop-types'
import styles from '../styles/Home.module.css'

const Home = ({ title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>Welcome to Next.JS</main>
    </div>
  )
}

export const getStaticProps = async () => ({
  props: {
    title: 'Next Project',
  },
})

Home.propTypes = {
  title: PropTypes.string,
}

Home.defaultProps = {
  title: 'Default Title',
}

export default Home
