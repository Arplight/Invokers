"use client";
import { FC } from "react";
import Arrow from "../../../../../../public/assets/Arrow.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export type PortfolioCategoryId =
  | "all"
  | "saas"
  | "ai"
  | "ecommerce"
  | "landingPage";

type TCategory = {
  categoryName: string;
  categoryId: PortfolioCategoryId;
};

type CategoryListProps = {
  activeCategory: PortfolioCategoryId;
  onCategoryChange: (categoryId: PortfolioCategoryId) => void;
};

const CategoryList: FC<CategoryListProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const t = useTranslations("CategoryList");

  const categories: TCategory[] = [
    { categoryName: t("categories.all"), categoryId: "all" },
    { categoryName: t("categories.saas"), categoryId: "saas" },
    { categoryName: t("categories.ai"), categoryId: "ai" },
    { categoryName: t("categories.ecommerce"), categoryId: "ecommerce" },
    { categoryName: t("categories.landingPage"), categoryId: "landingPage" },
  ];

  return (
    <ul className="flex md:flex-col gap-2 w-full justify-center flex-wrap md:overflow-x-visible w-fit">
      {categories.map((category) => (
        <li
          key={category.categoryId}
          className="cursor-pointer flex gap-1 items-center mb-1"
          onClick={() => onCategoryChange(category.categoryId)}
        >
          <p
            className={`large-paragraph duration-300 text-nowrap font-bold ${
              category.categoryId === activeCategory
                ? "primary-color"
                : "paragraph-light "
            }`}
          >
            {category.categoryName}
          </p>
          <span
            className={`duration-300 hidden md:inline  ${
              category.categoryId === activeCategory
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10 rtl:-translate-x-10"
            }`}
          >
            <Image
              src={Arrow}
              alt="arrow"
              width={24}
              height={24}
              className="rtl:rotate-180"
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
