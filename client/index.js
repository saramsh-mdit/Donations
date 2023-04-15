const project1 = {
  title: "hawa  21212asdas asdasd",
  description: "hello in my project asdas sadas",
};

// GET
axios
  .get("http://localhost:3500")
  .then((d) => {
    console.log(d?.data);
  })
  .catch((e) => {
    console.log(e);
  });

// POST
axios
  .post("http://localhost:3500/project", project1, {
    Headers: {
      authentication:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNjODQyODJkLTg4ZmYtNDg1MC1iNzJmLTNlNDUwMTRhODk1MCIsImlhdCI6MTY4MTU0Nzg2MCwiZXhwIjoxNjgxODA3MDYwfQ.IvfgEhcff9rOke1YnBjQFX6CzWck6pBd3nYAaqeJaaw",
    },
  })
  .then((d) => {
    console.log(d?.data);
  })
  .catch((e) => {
    console.log(e);
  });

// GET
axios
  .get("http://localhost:3500/project")
  .then((d) => {
    console.log(d?.data);
  })
  .catch((e) => {
    console.log(e);
  });
