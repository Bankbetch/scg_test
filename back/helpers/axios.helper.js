module.exports = {
  headerAxiosForThaiPost(token) {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    };
  },
};
