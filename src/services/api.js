import axios from "axios";

export const api = axios.create({
  baseURL: "https://app-todo-list-node.onrender.com/*",
});
