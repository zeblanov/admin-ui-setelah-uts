
const city = "Jakarta";
const street = " JL Kebon Jeruk";

export const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      users.map((user) => ({
        name: user.name,
        email: user.email,
        city,
        street,
      }))
    )
    .catch((error) => {
      console.error("[Service] Gagal mengambil data:", error);
      throw error;
    });
};