const getData = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  return response;
};

export default getData;
