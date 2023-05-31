import bcrypt from "bcryptjs"

 const data = {
  users: [
    {
      name: "yengo",
      email: "yengo@gmail.com",
      password: bcrypt.hashSync("123"),
      isAdmin: true,
    },
    {
      name: "mbakama",
      email: "mbakama@gmail.com",
      password: bcrypt.hashSync("1234"),
      isAdmin: false,
    },
    {
      name: "holel",
      email: "holel@gmail.com",
      password: bcrypt.hashSync("1234"),
      isAdmin: false,
    },
  ],
};
export default data
