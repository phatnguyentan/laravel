class Api {
  static get(url) {
    fetch(url, { headers: { Accept: "application/json" } })
      // .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  }
}

export default Api;
