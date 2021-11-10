import Layout from "../components/Layout/Layout";
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <h1 className="title">Welcome Next.js</h1>
      <p className={styles['title-homepage']}>Implementasi css module</p>
    </Layout>
  )
}

export default Home
