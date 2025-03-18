import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPosts } from "lib/getPosts";

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <article>{post.content}</article>
    </div>
  );
}

// Generate paths for all posts
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

// Fetch post data
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params?.slug);

  return { props: { post } };
};
