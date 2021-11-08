import Link from 'next/link';

const Home = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </header>
      Welcome Next.js
    </>
  )
}

export default Home
