import { getAllPosts } from "lib/getPosts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
