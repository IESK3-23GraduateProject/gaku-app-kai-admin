import axios from "axios";

export class PostNotFoundError extends Error {}

export const fetchPost = async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`);
  const post = await axios
    .get(`http://localhost:3000/teacher-admin-news/${postId}`)
    .then((r) => r.data)
    .catch((err) => {
      if (err.status === 404) {
        throw new PostNotFoundError(`Post with id "${postId}" not found!`);
      }
      throw err;
    });

  return post;
};

export const fetchPosts = async () => {
  console.info("Fetching posts...");
  return axios
    .get("http://localhost:3000/teacher-admin-news")
    .then((r) => r.data.slice(0, 50));
};
