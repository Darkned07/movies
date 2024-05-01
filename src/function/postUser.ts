type dt = {
  name: string;
  email: string;
  password: string;
  role: string;
};

const postUser = async (url: string, data: dt) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export { postUser };
