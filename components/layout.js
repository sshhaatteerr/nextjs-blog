import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Abdelrahman AlShater';
export const siteTitle = "Shater's Land";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
              <Image
                priority
                src="/images/about.jpg"
                height={1100}
                width={1100}
                alt=""
              />
            <p>
            </p>
          </>
        )}
      </header>
      <main>{children}</main>
      {(
        <div>
          <Link href="https://github.com/sshhaatteerr" target="_blank">Github</Link>
          <br/>
          <Link href="https://www.linkedin.com/in/abdelrahmanalshater/" target="_blank">Linkedin</Link>
          <br/>
          <Link href="https://github.com/sshhaatteerr" target="_blank">CV</Link>
        </div>
      )}
    </div>
  );
}