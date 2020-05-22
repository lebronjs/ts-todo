import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/Alert/alert.js'

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
        return (
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p
                        onClick={() => {
                            alert(123);
                        }}
                    >
                        [click try try]
                    </p>
                </section>
                <hr />
                <h2>
                    <Link href="/posts/first-post">
                        <a>First Post</a>
                    </Link>
                </h2>
                <h2>
                    <Link href="/posts/ssg-ssr">
                        <a>ssg-ssr</a>
                    </Link>
                </h2>
                <h2>
                    <Link href="/posts/pre-rendering">
                        <a>pre-rendering</a>
                    </Link>
                </h2>
                <hr />
                <Alert type="error">123</Alert>
                <hr />
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <h2 className={utilStyles.headingLg}>Blog</h2>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.listItem} key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
                            </li>
                        ))}
                    </ul>
                </section>
            </Layout>
        );
}
              