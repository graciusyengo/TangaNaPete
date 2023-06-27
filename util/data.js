import bcrypt from "bcryptjs"

 const data = {
  users: [
    {
      name: "yengo",
      email: "yengo@gmail.com",
      password: bcrypt.hashSync("12345678"),
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
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "chadrack",
      email: "chadrack@gmail.com",
      password: bcrypt.hashSync("1234567"),
      isAdmin: false,
    },

  ],

  usersInfoRecents: [
    {
      id:1,
      name: "yengo",
      firstname: "mukuna",
      email: "yengo@gmail.com",
      date:"15 min passé",
      type:"interrogation"
      
    },
    {
      id:2,
      name: "mbakama",
      firstname: "mukuna",
      email: "mbakama@gmail.com",
      date:"15 min passé",
      type:"interrogation"
  
    },
    {
      id:3,
      name: "holel",
      firstname: "grun",
      email: "holel@gmail.com",
      date:"15 min passé",
      type:"interrogation"
    
    },
    {
      id:4,
      name: "christian",
      firstname: "mukuna",
      email: "christia@gmail.com",
      date:"15 min passé",
      type:"Travaux pratique"

    },
    {
      id:5,
      name: "chadrack",
      firstname: "mukuna",
      email: "chadrack@gmail.com",
      date:"15 min passé",
      type:"Travaux pratique"
    
    },
    {
      id:6,
      name: "patrick",
      firstname: "nkoy",
      email: "chadrack@gmail.com",
      date:"15 min passé",
      type:"interrogation"
    },
    {
      id:7,
      name: "josue",
      firstname: "mbiya",
      email: "josue@gmail.com",
      date:"15 min passé",
      type:"examen"
    },

  ],
};

export default data
