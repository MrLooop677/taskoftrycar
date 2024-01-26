import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/";

export async function getAllPosts() {
  const postsUrl = `${baseUrl}posts`;

  return axios.get(postsUrl);
}
export async function getAllUsers() {
  const usersUrl = `${baseUrl}users`;

  return axios.get(usersUrl);
}
