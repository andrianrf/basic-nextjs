import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header"
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="title">Welcome Next.js</h1>
      <p className={styles['title-homepage']}>Implementasi css module</p>
      <Footer />
    </>
  )
}

export default Home
