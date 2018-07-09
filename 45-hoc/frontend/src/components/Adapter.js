class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getJWT() {
    return localStorage.getItem('token');
  }

  static login(username, password) {
    return fetch(`http://localhost:3000/sessions/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  }

  static getMySnacks(userId) {
    return fetch(
      `http://localhost:3000/users/${userId}/snacks`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": Adapter.getJWT(),
        }
      }
    );
  }

  static getSnacks() {
    return fetch(
      `http://localhost:3000/snacks/`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": Adapter.getJWT(),
        }
      }
    );
  }
}

export default Adapter;
