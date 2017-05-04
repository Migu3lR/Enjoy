import fetch from 'isomorphic-fetch';
import Firebase from './Firebase';

const data = Firebase.database();
const auth = Firebase.auth();

const api = {
  db: {
    getList() {
      const response = data.ref('lista').limitToLast(100);
      return response;
    },
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}`);
      const data = await response.json();

      return data;
    },
    async getComments(id = 1) {
      const response = await fetch(`${baseUrl}/posts/${id}/comments`);
      const data = await response.json();

      return data;
    },
  },
  users: {
    async getSingle(id = 1) {
      const response = await fetch(`${baseUrl}/users/${id}`);
      const data = await response.json();

      return data;
    },
    async getPosts(id = 1) {
      const response = await fetch(`${baseUrl}/posts/?userId=${id}`);
      const data = await response.json();

      return data;
    },
  },

};

export default api;
