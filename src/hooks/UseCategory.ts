import { useParams } from "react-router-dom";
import type { Category, SubCategory } from "../../src/types/Category";

export function useCategory(mainCategories: Category[]) {
    const { categorySlug } = useParams<{ categorySlug: string }>();

    const selectedCategory: Category | undefined = mainCategories.find(
        (cat) => cat.slug === categorySlug || cat.subCategories?.some((sub) => sub.slug === categorySlug)
    );

    const selectedSubCategory: SubCategory | undefined = selectedCategory?.subCategories?.find(
        (sub) => sub.slug === categorySlug
    );

    return { categorySlug, selectedCategory, selectedSubCategory };
}
