// api.ts
import axios from 'axios';

interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: boolean;
  bio?: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
// types.ts
export type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
export type FetchGithubUserResult = Promise<GithubUser>;

export const fetchGithubUser = (username: string): FetchGithubUserResult => {
  return axios.get<GithubUser>(`https://api.github.com/users/${username}`).then(response => response.data);
};