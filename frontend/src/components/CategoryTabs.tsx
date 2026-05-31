import { Link } from "react-router";
import PaanCornerImage from "../assets/categories/paan-corner.png";
import DairyBreadEggsImage from "../assets/categories/dairy-bread-eggs.png";
import FruitsVegetablesImage from "../assets/categories/fruits-vegetables.png";
import ColdDrinksJuicesImage from "../assets/categories/cold-drinks-juices.png";
import SnacksMunchiesImage from "../assets/categories/snacks-munchies.png";
import BreakfastInstantFoodImage from "../assets/categories/breakfast-instant-food.png";
import SweetToothImage from "../assets/categories/sweet-tooth.png";
import BakeryBiscuitsImage from "../assets/categories/bakery-biscuits.png";
import TeaCoffeeMilkDrinksImage from "../assets/categories/tea-coffee-milk-drinks.png";
import AttaRiceDalImage from "../assets/categories/atta-rice-dal.png";
import MasalaOilMoreImage from "../assets/categories/masala-oil-more.png";
import SaucesSpreadsImage from "../assets/categories/sauces-spreads.png";
import ChickenMeatFishImage from "../assets/categories/chicken-meat-fish.png";
import OrganicHealthyLivingImage from "../assets/categories/organic-healthy-living.png";
import BabyCareImage from "../assets/categories/baby-care.png";
import PharmaWellnessImage from "../assets/categories/pharma-wellness.png";
import CleaningEssentialsImage from "../assets/categories/cleaning-essentials.png";
import HomeOfficeImage from "../assets/categories/home-office.png";
import PersonalCareImage from "../assets/categories/personal-care.png";
import PetCareImage from "../assets/categories/pet-care.png";

type CategoryItem = {
  name: string;
  image: string;
};

const categories: CategoryItem[] = [
  {
    name: "Paan Corner",
    image: PaanCornerImage,
  },
  {
    name: "Dairy, Bread & Eggs",
    image: DairyBreadEggsImage,
  },
  {
    name: "Fruits & Vegetables",
    image: FruitsVegetablesImage,
  },
  {
    name: "Cold Drinks & Juices",
    image: ColdDrinksJuicesImage,
  },
  {
    name: "Snacks & Munchies",
    image: SnacksMunchiesImage,
  },
  {
    name: "Breakfast & Instant Food",
    image: BreakfastInstantFoodImage,
  },
  {
    name: "Sweet Tooth",
    image: SweetToothImage,
  },
  {
    name: "Bakery & Biscuits",
    image: BakeryBiscuitsImage,
  },
  {
    name: "Tea, Coffee & Milk Drinks",
    image: TeaCoffeeMilkDrinksImage,
  },
  {
    name: "Atta, Rice & Dal",
    image: AttaRiceDalImage,
  },
  {
    name: "Masala, Oil & More",
    image: MasalaOilMoreImage,
  },
  {
    name: "Sauces & Spreads",
    image: SaucesSpreadsImage,
  },
  {
    name: "Chicken, Meat & Fish",
    image: ChickenMeatFishImage,
  },
  {
    name: "Organic & Healthy Living",
    image: OrganicHealthyLivingImage,
  },
  {
    name: "Baby Care",
    image: BabyCareImage,
  },
  {
    name: "Pharma & Wellness",
    image: PharmaWellnessImage,
  },
  {
    name: "Cleaning Essentials",
    image: CleaningEssentialsImage,
  },
  {
    name: "Home & Office",
    image: HomeOfficeImage,
  },
  {
    name: "Personal Care",
    image: PersonalCareImage,
  },
  {
    name: "Pet Care",
    image: PetCareImage,
  },
];

const CategoryTabs = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-10">
      {categories.map((cat) => {
        const slug = cat.name
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return (
          <Link
            key={cat.name}
            to={`/products/${slug}`}
            className="flex h-36 flex-col items-center justify-center gap-2 rounded-lg border border-[#dde6ef] bg-[#eef2f7] px-3 py-4"
            aria-label={cat.name}
          >
            <div className="flex h-16 w-16 items-center justify-center">
              <img
                src={cat.image}
                alt=""
                className="h-14 w-14 object-contain"
              />
            </div>
            <span className="mt-1 text-center text-sm font-semibold">
              {cat.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
