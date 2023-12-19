import { createStore } from 'vuex'

export default createStore({
  state: {
    postList: [{
      "id": 1,
      "createTime": "07.11.2023",
      "authorName": "Roland-Carlis Vares",
      "authorAvatar": "Vares.png",
      "body":"Willow",
      "image":"pic3.png",
      "likes": 152
  },
  {
      "id": 2,
      "createTime": "03.11.2023",
      "authorName": "Robin Piir",
      "authorAvatar": "Piir.png",
      "body":"My head hurts",
      "image":null,
      "likes": 1
  },
  {
      "id": 3,
      "createTime": "24.10.2023",
      "authorName": "Roland-Carlis Vares",
      "authorAvatar": "Vares.png",
      "body":"Munch",
      "image":"Munch.png",
      "likes": 3862
  },
  {
      "id": 4,
      "createTime": "14.10.2023",
      "authorName": "Karolin Kerro",
      "authorAvatar": "Kerro.png",
      "body":"Off to school!",
      "image":null,
      "likes": 15646
  },
  {
      "id": 5,
      "createTime": "12.10.2023",
      "authorName": "Robin Piir",
      "authorAvatar": "Piir.png",
      "body":"Anyone know any good coffee places?",
      "image":null,
      "likes": 0
  },
  {
      "id": 6,
      "createTime": "10.10.2023",
      "authorName": "Robin Piir",
      "authorAvatar": "Piir.png",
      "body":"Caesar",
      "image":"pic1.png",
      "likes": 17
  },
  {
      "id": 7,
      "createTime": "23.09.2023",
      "authorName": "Roland-Carlis Vares",
      "authorAvatar": "Vares.png",
      "body":"Kebab",
      "image":null,
      "likes": 6
  },
  {
      "id": 8,
      "createTime": "10.09.2023",
      "authorName": "Robin Piir",
      "authorAvatar": "Piir.png",
      "body":"Luci",
      "image":"pic2.png",
      "likes": 17
  },
  {
      "id": 9,
      "createTime": "28.08.2023",
      "authorName": "Roland-Carlis Vares",
      "authorAvatar": "Vares.png",
      "body":"Off to my first class of the semester",
      "image":null,
      "likes": 6
  },
  {
      "id": 10,
      "createTime": "20.08.2023",
      "authorName": "Karolin Kerro",
      "authorAvatar": "Kerro.png",
      "body":"Painting in nature",
      "image":"Picnic.png",
      "likes": 636
  },
  {
      "id": 11,
      "createTime": "69.420.911",
      "authorName": "Robin Piir",
      "authorAvatar": "Piir.png",
      "body":"Fortnite players are noobs lmao",
      "image":null,
      "likes": 15982
  }]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
