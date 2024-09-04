"use client";
import { FC, useState } from "react";
import Arrow from "../../../../../../public/assets/Arrow.svg";
import Image from "next/image";
type TCategory = {
  categoryName: string;
  categoryId: number;
};

const CategoryList: FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  // data
  const categories: TCategory[] = [
    { categoryName: "Ecommerce", categoryId: 0 },
    { categoryName: "Landing-page", categoryId: 1 },
    { categoryName: "Personal portfolio", categoryId: 2 },
    { categoryName: "Wordpress", categoryId: 3 },
  ];
  const categoryHandler = (currentId: number) => {
    setActiveCategory(currentId);
  };
  return (
    <ul>
      {categories.map((category) => (
        <li
          key={category.categoryId}
          className="mb-2 cursor-pointer flex gap-1 items-center"
          onClick={() => categoryHandler(category.categoryId)}
        >
          <p
            className={`large-paragraph duration-300 ${
              category.categoryId === activeCategory
                ? "primary-color"
                : "paragraph-light "
            }`}
          >
            {category.categoryName}
          </p>
          <span
            className={`duration-300 ${
              category.categoryId === activeCategory
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Image src={Arrow} alt="arrow" width={24} height={24} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
