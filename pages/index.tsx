import Layout from "../components/Layout/Layout";
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <h1 className="title">Welcome Next.js</h1>
      <p className={styles['title-homepage']}>Implementasi css module</p>
      <Image src="/assets/img/1.jpg" width={300} height={300} />
      <img src="/assets/img/1.jpg" width={300} height={300} />
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <Image src="/assets/img/2.jpg" width={300} height={300} />
      <img src="/assets/img/2.jpg" width={300} height={300} />
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <p>lazy load</p>
      <Image src="/assets/img/3.jpg" width={300} height={300} />
      <img src="/assets/img/3.jpg" width={300} height={300} />
    </Layout>
  )
}

export default Home
