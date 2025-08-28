export type Product = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    categoryId: number;
    categoryName: string | null;
    createdTime: string;
    rating?: number;

};
export type ProductAttribute = {
    id: number;
    name: string;
};

export type ProductAttributeValue = {
    id: number;
    value: string;
    stock: number;
    reservedStock: number;
    productAttribute: ProductAttribute;
};

export type ProductDetailType = Product & {
    productAttributeValues: ProductAttributeValue[];
};
