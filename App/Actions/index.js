import req from 'superagent';
/* ------------- Types and Action Creators ------------- */
export const request = () => ({
  type: 'REQUEST',
});

export const success = username => ({
  type: 'SUCCESS',
  username,
});

export const authFail = error => ({
  type: 'AUTH_FAIL',
  error,
});

export const loginRequest = (username, password) => {
  return (dispatch) => {
    dispatch(request);
    const url = 'http://127.0.0.1:3000';
    return req.post(url.concat('/login'))
      .send({ username, password })
      .end((err, res) => {
        if (err) { throw err; }
         // change state to success / failure
        console.log(res);
        const data = JSON.parse(res.text);
        if (data.success) {
          return dispatch(success(username));
        }
        const error = data.error;
        return dispatch(authFail(error));
      });
  };
};

// REFACTOR: Below code is almost DUPLICATE.
// Finalize the signin / signup endpoints then refactor

export const registerRequest = (username, password) => {
  return (dispatch) => {
    dispatch(request);
    const url = 'http://127.0.0.1:3000';
    return req.post(url.concat('/signup'))
      .send({ username, password })
      .end((err, res) => {
        if (err) { throw err; }
         // change state to success / failure
        console.log(res);
        const data = JSON.parse(res.text);
        if (data.success) {
          return dispatch(success(username));
        }
        const error = data.error;
        return dispatch(authFail(error));
      });
  };
};

