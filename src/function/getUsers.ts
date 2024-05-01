const getUsers = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();
  return { data };
};

export { getUsers };
