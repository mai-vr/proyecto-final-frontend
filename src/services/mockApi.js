const users = [
  {
    id: 1,
    firstName: "Scarlett",
    lastName: "DiCaprio",
    email: "scarlett.dicaprio@gmail.com",
    password: "123456",
    address: { country: "USA" },
    status: "online",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Scarlett",
    messages: [
      { author: "Scarlett", text: "Hola! ¿Cómo estás?", time: "09:12" },
      { author: "me", text: "Todo bien, arrancando el día", time: "09:14" },
      { author: "Scarlett", text: "Genial", time: "09:15" }
    ]
  },
  {
    id: 2,
    firstName: "Leonardo",
    lastName: "Johansson",
    email: "leonardo.johansson@gmail.com",
    password: "123456",
    address: { country: "USA" },
    status: "offline",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Leonardo",
    messages: [
      { author: "Leonardo", text: "¿Seguimos luego?", time: "11:03" },
      { author: "me", text: "Dale, avisame", time: "11:05" }
    ]
  },
  {
    id: 3,
    firstName: "Margot",
    lastName: "Pitt",
    email: "margot.pitt@gmail.com",
    password: "123456",
    address: { country: "Australia" },
    status: "online",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Margot",
    messages: [
      { author: "Margot", text: "Terminé el trabajo", time: "14:20" },
      { author: "me", text: "Excelente!", time: "14:22" }
    ]
  },
  {
    id: 4,
    firstName: "Brad",
    lastName: "Robbie",
    email: "brad.robbie@gmail.com",
    password: "123456",
    address: { country: "USA" },
    status: "offline",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Brad",
    messages: [
      { author: "Brad", text: "Te llamo más tarde", time: "16:40" },
      { author: "me", text: "Perfecto", time: "16:41" }
    ]
  },
  {
    id: 5,
    firstName: "Taylor",
    lastName: "Kidman",
    email: "taylor.kidman@gmail.com",
    password: "123456",
    address: { country: "USA" },
    status: "online",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Zendaya",
    messages: [
      { author: "Taylor", text: "¿Vamos al cine?", time: "18:05" },
      { author: "me", text: "Obvio!", time: "18:06" }
    ]
  },
  {
    id: 6,
    firstName: "Tom",
    lastName: "Grande",
    email: "tom.grande@gmail.com",
    password: "123456",
    address: { country: "USA" },
    status: "offline",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Tom",
    messages: [
      { author: "Tom", text: "Estoy ocupado ahora", time: "10:10" },
      { author: "me", text: "Después hablamos", time: "10:11" }
    ]
  },
  {
    id: 7,
    firstName: "Emma",
    lastName: "Styles",
    email: "emma.styles@gmail.com",
    password: "123456",
    address: { country: "UK" },
    status: "online",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Emma",
    messages: [
      { author: "Emma", text: "Buen día!", time: "08:30" },
      { author: "me", text: "Buen día Emma", time: "08:32" }
    ]
  },
  {
    id: 8,
    firstName: "Ryan",
    lastName: "Stone",
    email: "ryan.stone@gmail.com",
    password: "123456",
    address: { country: "Canada" },
    status: "offline",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Ryan",
    messages: [
      { author: "Ryan", text: "¿Jugamos luego?", time: "20:01" },
      { author: "me", text: "Dale!", time: "20:02" }
    ]
  },
  {
    id: 9,
    firstName: "Jennifer",
    lastName: "Reynolds",
    email: "jennifer.reynolds@gmail.com",
    password: "123456",
    address: { country: "USA" },
    status: "online",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Jennifer",
    messages: [
      { author: "Jennifer", text: "Te envié el archivo", time: "13:55" },
      { author: "me", text: "Recibido 👍", time: "13:57" }
    ]
  },
  {
    id: 10,
    firstName: "Timothée",
    lastName: "Swift",
    email: "timothee.swift@gmail.com",
    password: "123456",
    address: { country: "France" },
    status: "offline",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Timothee",
    messages: [
      { author: "Timothée", text: "Nos vemos mañana", time: "22:10" },
      { author: "me", text: "Perfecto!", time: "22:11" }
    ]
  }
];

export { users };
