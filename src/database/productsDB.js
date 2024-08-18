import { v4 as uuidv4 } from "uuid";
import rose_linen from "../assets/images/rose_linen.jpg";
import noir_muse from "../assets/images/noir_muse.jpg";
import beige_jacket from "../assets/images/beige_jacket.jpg";
import product_2 from "../assets/images/product_2.jpg";
import autumn_collection_1 from "../assets/images/autumn_collection_1.jpg";
import glided_harmony from "../assets/images/glided_harmony.jpg";
import urban_classic from "../assets/images/urban_classic.jpg";
import vintage_glamour from "../assets/images/vintage_glamour.jpg";
import silver_curve from "../assets/images/silver_curve.jpg";
import pearl_arc from "../assets/images/pearl_arc.jpg";
import golden_pebble from "../assets/images/golden_pebble.jpg";
import marble_harmony from "../assets/images/marble_harmony.jpg";

export const productsDB = [
  {
    id: uuidv4(),
    name: "Peach Linen ",
    img: rose_linen,
    description:
      " A sleek sleeveless black top perfect for a modern, minimalist look.",
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Noir Muse",
    description:
      " A sleek sleeveless black top perfect for a modern, minimalist look.",
    img: noir_muse,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Urban Classic",
    description:
      " A timeless oversized white shirt that embodies contemporary elegance.",
    img: urban_classic,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Beige Jacket",
    description:
      " A warm brown puffer jacket ideal for exploring the outdoors on chilly days.",
    img: beige_jacket,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Midnight Tank",
    description:
      " A sleek sleeveless black top perfect for a modern, minimalist look.",
    img: product_2,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Ivory Grace",
    description:
      " An elegant off-white top/dress that exudes sophistication and simplicity.",
    img: autumn_collection_1,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Gilded Harmony",
    description:
      "A set of gold jewelry pieces that blend modern minimalism with classic elegance.",
    img: glided_harmony,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Vintage Glamour",
    img: vintage_glamour,
    description:
      "A jewelry set that blends vintage-inspired charms with modern gold chains.",
    price: 199,
    category: "jewellery",
  },
  {
    id: uuidv4(),
    name: "Marble Harmony",
    img: marble_harmony,
    description:
      "A layered necklace set featuring a marbled stone pendant and a gold coin.",
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Silver Curve",
    img: silver_curve,
    description:
      "A smooth, rounded silver hoop with a minimalist design for timeless style.",
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Pearl Arc",
    description:
      "An earring that combines an organic-shaped gold stud with a graceful pearl drop.",
    img: pearl_arc,
    price: 199,
  },
  {
    id: uuidv4(),
    name: "Golden Pebble",
    img: golden_pebble,
    description:
      " A polished gold stud earring with an organic, pebble-like shape for a modern, artistic touch.",
    price: 199,
  },
];
