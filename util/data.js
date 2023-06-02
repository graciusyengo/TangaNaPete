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
    {
      name: "christian",
      email: "christian@gmail.com",
      password: bcrypt.hashSync("1234"),
      isAdmin: false,
    },
    {
      name: "obeldddd",
      email: "obel@gmail.com",
      password: bcrypt.hashSync("1234567"),
      isAdmin: false,
    },

  ],
};
export default data
