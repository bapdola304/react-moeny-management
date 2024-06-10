import ApiMethods from "./api";

async function getUsers() {
  const url = '/user';
  console.log(url);
  try {
    const response = await ApiMethods.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {
  getUsers
};