import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/detail/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "product" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
