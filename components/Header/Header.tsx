import Link from 'next/link';

export default function Header() {
    return (
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
    )
}
