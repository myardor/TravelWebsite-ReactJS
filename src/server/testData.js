import img1 from "../assets/img(1).jpg"
import img2 from "../assets/img(2).jpg"
import img3 from "../assets/img(3).jpg"
import img4 from "../assets/img(4).jpg"
import img5 from "../assets/img(5).jpg"
import img6 from "../assets/img(6).jpg"
import img7 from "../assets/img(7).jpg"
import img8 from "../assets/img(8).jpg"
import img9 from "../assets/img(9).jpg"
import img10 from "../assets/img(10).jpg"
import img11 from "../assets/img(11).jpg"
import img12 from "../assets/img(12).jpg"
import img13 from "../assets/img(13).jpg"
import img14 from "../assets/img(14).jpg"
import img15 from "../assets/img(15).jpg"
import img16 from "../assets/img(16).jpg"
import img17 from "../assets/img(17).jpg"
import img18 from "../assets/img(18).jpg"

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Santorini",
    location: "Greece",
    grade: "SCENIC GETAWAY",
    fees: "$850",
    description:
      "Santorini, with its iconic white-washed buildings, stunning sunsets, and crystal-clear waters, is a dream destination for those seeking beauty and tranquility.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "CULTURAL ENCHANTMENT",
    fees: "$600",
    description:
      "Immerse yourself in the rich cultural heritage of Kyoto, where ancient temples, traditional tea ceremonies, and picturesque gardens await your exploration.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Patagonia",
    location: "Argentina",
    grade: "ADVENTURE ESCAPE",
    fees: "$1200",
    description:
      "For the thrill-seekers, Patagonia offers breathtaking landscapes, rugged mountains, and exciting outdoor activities, making it a paradise for adventure enthusiasts.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Istanbul",
    location: "Turkey",
    grade: "HISTORICAL DISCOVERY",
    fees: "$750",
    description:
      "Step into the crossroads of history in Istanbul, where ancient architecture, vibrant markets, and the blend of cultures create a mesmerizing experience for travelers.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Maui",
    location: "Hawaii",
    grade: "TROPICAL PARADISE",
    fees: "$900",
    description:
      "Escape to the tropical paradise of Maui, where lush landscapes, pristine beaches, and a laid-back atmosphere invite you to unwind and enjoy the beauty of nature.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Barcelona",
    location: "Spain",
    grade: "ARTISTIC RETREAT",
    fees: "$800",
    description:
      "Discover the artistic and architectural wonders of Barcelona, from the famous works of Gaudí to the vibrant street art, creating a dynamic and inspiring atmosphere.",
  },
  {
    id: 8,
    imgSrc: img17,
    destTitle: "Marrakech",
    location: "Morocco",
    grade: "EXOTIC ADVENTURE",
    fees: "$700",
    description:
      "Embark on an exotic adventure in Marrakech, where the bustling souks, stunning palaces, and the vibrant colors of the city transport you to a magical and enchanting world.",
  },
  {
    id: 9,
    imgSrc: img17,
    destTitle: "Queenstown",
    location: "New Zealand",
    grade: "THRILLING ESCAPE",
    fees: "$950",
    description:
      "For adrenaline junkies, Queenstown offers a thrilling escape with its bungee jumping, skydiving, and other adventure sports against the backdrop of stunning landscapes.",
  },
  {
    id: 10,
    imgSrc: img17,
    destTitle: "Grand Canyon",
    location: "Arizona, USA",
    grade: "NATURAL WONDER",
    fees: "$800",
    description:
      "Explore the breathtaking beauty of the Grand Canyon, known for its stunning rock formations and vast, awe-inspiring landscapes.",
  },
  {
    id: 11,
    imgSrc: img17,
    destTitle: "Santorini",
    location: "Greece",
    grade: "ROMANTIC GETAWAY",
    fees: "$900",
    description:
      "Experience the romance of Santorini with its iconic white-washed buildings, crystal-clear waters, and mesmerizing sunsets over the Aegean Sea.",
  },
  {
    id: 12,
    imgSrc: img17,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "HISTORICAL WONDERS",
    fees: "$850",
    description:
      "Marvel at the ancient ruins of Machu Picchu, a UNESCO World Heritage site nestled high in the Andes mountains, and discover the mysteries of the Inca civilization.",
  },
  {
    id: 13,
    imgSrc: img17,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "CULTURAL ENCHANTMENT",
    fees: "$750",
    description:
      "Immerse yourself in the cultural enchantment of Kyoto, where traditional tea houses, ancient temples, and beautiful cherry blossoms create a timeless atmosphere.",
  },
  {
    id: 14,
    imgSrc: img17,
    destTitle: "Victoria Falls",
    location: "Zambia/Zimbabwe",
    grade: "NATURAL WONDER",
    fees: "$820",
    description:
      "Witness the awe-inspiring beauty of Victoria Falls, one of the largest waterfalls in the world, with its powerful cascades and misty rainbows.",
  },
  {
    id: 15,
    imgSrc: img17,
    destTitle: "Banff National Park",
    location: "Canada",
    grade: "SCENIC BEAUTY",
    fees: "$890",
    description:
      "Discover the scenic beauty of Banff National Park, where turquoise lakes, towering mountains, and abundant wildlife create a picturesque Canadian landscape.",
  },
  {
    id: 16,
    imgSrc: img17,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "UNDERWATER PARADISE",
    fees: "$920",
    description:
      "Explore the underwater paradise of the Great Barrier Reef, home to a diverse range of marine life and vibrant coral formations.",
  },
  {
    id: 17,
    imgSrc: img17,
    destTitle: "Serengeti National Park",
    location: "Tanzania",
    grade: "WILDLIFE SAFARI",
    fees: "$870",
    description:
      "Embark on a wildlife safari in Serengeti National Park, where the annual migration of wildebeest and other animals creates a spectacular natural phenomenon.",
  },
  {
    id: 18,
    imgSrc: img18,
    destTitle: "Barcelona",
    location: "Spain",
    grade: "CULTURAL DELIGHT",
    fees: "$880",
    description:
      "Immerse yourself in the cultural delights of Barcelona, with its unique architecture, vibrant street life, and rich artistic heritage.",
  },
]

const jsonString = JSON.stringify(Data, null, 2)
console.log(jsonString)
