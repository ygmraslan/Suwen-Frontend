import axios from "axios";
import type { Category } from "../types/Category";

const API_BASE = "http://localhost:5079";

type RawCategory = {
    id: number;
    name: string;
    subCategories?: RawCategory[];
};

function slugifyTR(name: string) {
    return name
        .toLocaleLowerCase("tr")
        .replaceAll("ı", "i")
        .replaceAll("ğ", "g")
        .replaceAll("ü", "u")
        .replaceAll("ş", "s")
        .replaceAll("ö", "o")
        .replaceAll("ç", "c")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

function mapToCategory(raw: RawCategory): Category {
    return {
        id: raw.id,
        name: raw.name,
        slug: slugifyTR(raw.name),
        subCategories: (raw.subCategories ?? []).map(mapToCategory),
    };
}

export async function getCategories(): Promise<Category[]> {
    const res = await axios.get(`${API_BASE}/api/Category/getall`);

    const rawCategories: RawCategory[] = res.data.data ?? [];
    const parentCategories = rawCategories.filter(c => c.subCategories && c.subCategories.length > 0);

    return parentCategories.map(mapToCategory);
}
