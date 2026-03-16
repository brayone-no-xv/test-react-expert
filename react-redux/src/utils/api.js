const API_BASE_URL = 'https://forum-api.dicoding.dev/v1';

class Api {
  static async _fetchWithAuth(url, options = {}) {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await response.json();
    const {status, message} = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson.data;
  }

  static async _fetchWithAuthToken(url, options = {}) {
    return this._fetchWithAuth(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${this.getAccessToken()}`,
      },
    });
  }

  static putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  static async register({name, email, password}) {
    const response = await this._fetchWithAuth(`${API_BASE_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    return response.user;
  }

  static async login({email, password}) {
    const response = await this._fetchWithAuth(`${API_BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response.token;
  }

  static async getOwnProfile() {
    const response = await this._fetchWithAuthToken(`${API_BASE_URL}/users/me`);

    return response.user;
  }

  static async getAllUsers() {
    const response = await this._fetchWithAuth(`${API_BASE_URL}/users`);

    return response.users;
  }

  static async getAllThreads() {
    const response = await this._fetchWithAuth(`${API_BASE_URL}/threads`);

    return response.threads;
  }

  static async createThread({title, body, category = ''}) {
    const response = await this._fetchWithAuthToken(`${API_BASE_URL}/threads`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });

    return response.thread;
  }

  static async getThreadDetail(id) {
    const response = await this._fetchWithAuth(`${API_BASE_URL}/threads/${id}`);

    return response.detailThread;
  }

  static async createComment({threadId, content}) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/comments`,
      {
        method: 'POST',
        body: JSON.stringify({
          content,
        }),
      },
    );

    return response.comment;
  }

  static async upVoteThread(threadId) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/up-vote`,
      {
        method: 'POST',
      },
    );

    return response;
  }

  static async downVoteThread(threadId) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/down-vote`,
      {
        method: 'POST',
      },
    );

    return response;
  }

  static async neutralizeVoteThread(threadId) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/neutral-vote`,
      {
        method: 'POST',
      },
    );

    return response;
  }

  static async upVoteComment({threadId, commentId}) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: 'POST',
      },
    );

    return response;
  }

  static async downVoteComment({threadId, commentId}) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
      },
    );

    return response;
  }

  static async neutralizeVoteComment({threadId, commentId}) {
    const response = await this._fetchWithAuthToken(
      `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
      },
    );

    return response;
  }

  static async getLeaderboards() {
    const response = await this._fetchWithAuth(`${API_BASE_URL}/leaderboards`);

    return response.leaderboards;
  }
}

export default Api;
