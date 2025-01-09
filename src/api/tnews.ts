import axios from 'axios'

export class PostNotFoundError extends Error {}

export type PostType = {
  id: number | string;
  name: string;
  form_name: string;
}

export type CreatePostInput = Omit<PostType, 'id'>
export type UpdatePostInput = Partial<CreatePostInput>

export const fetchPost = async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`);
  await new Promise((r) => setTimeout(r, 500));
  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon-form/${postId}`)
    .then((r) => {
      // Transform the Pokemon API response to match PostType
      return {
        id: r.data.id,
        name: r.data.name,
        form_name: r.data.form_name || r.data.name // fallback if form_name is empty
      };
    })
    .catch((err) => {
      if (err.response?.status === 404) {
        throw new PostNotFoundError(`Post with id "${postId}" not found!`);
      }
      throw err;
    });

  return response;
}

export const fetchPosts = async () => {
  console.info('Fetching posts...');
  await new Promise((r) => setTimeout(r, 500));
  const response = await axios
    .get('https://pokeapi.co/api/v2/pokemon-form?limit=10')
    .then((r) => {
      // Transform the Pokemon API response to match PostType
      return r.data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        form_name: pokemon.name
      }));
    });
  
  return response;
}

// Create a new post
export const createPost = async (input: CreatePostInput) => {
  console.info('Creating post...')
  await new Promise((r) => setTimeout(r, 500))
  const response = await axios.post<PostType>(
    'https://pokeapi.co/api/v2/pokemon-form',
    input
  )
  return response.data
}

// Update an existing post
export const updatePost = async (id: string, input: UpdatePostInput) => {
  console.info(`Updating post ${id}...`)
  await new Promise((r) => setTimeout(r, 500))
  const response = await axios.put<PostType>(
    `https://pokeapi.co/api/v2/pokemon-form/${id}`,
    input
  )
  return response.data
}

// Delete a post
export const deletePost = async (id: string) => {
  console.info(`Deleting post ${id}...`)
  await new Promise((r) => setTimeout(r, 500))
  await axios.delete(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
}