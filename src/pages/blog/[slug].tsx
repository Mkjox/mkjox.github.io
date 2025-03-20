import { getAllPosts } from "lib/getPosts";
import { GetStaticProps, GetStaticPaths } from "next";

type PostProps = {
  metadata: {
    title: string;
    date: string;
  };
  content: string;
};

export default function BlogPost({ metadata, content }: PostProps) {
  return (
    <article>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      metadata: post.metadata,
      content: post.content,
    },
  };
};
