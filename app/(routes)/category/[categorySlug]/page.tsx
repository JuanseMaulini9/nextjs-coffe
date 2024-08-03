"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { useParams, useRouter } from "next/navigation";
import { ResponseType } from "@/types/response";
import { Separator } from "@/components/ui/separator";
import FilterControlCategory from "../components/FiltersControlCategory";
import SkeletonSchema from "@/components/SkeletonScheme";
import ProductCard from "../components/ProductCard";
import { ProductType } from "@/types/Product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const router = useRouter();

  const [filterOrigin, setFilterOrigin] = useState("");
  const [filterTaste, setFilterTaste] = useState("");

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === "" && filterTaste === ""
      ? result
      : result.filter(
          (product: ProductType) =>
            (filterOrigin === "" ||
              product.attributes.origin === filterOrigin) &&
            (filterTaste === "" || product.attributes.taste === filterTaste)
        ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">
          Café {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator></Separator>
      <div className="sm:flex sm:justify-between gap-10">
        <FilterControlCategory
          setFilterOrigin={setFilterOrigin}
          setFilterTaste={setFilterTaste}
        ></FilterControlCategory>
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3}></SkeletonSchema>}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro</p>
            )}
        </div>
      </div>
    </div>
  );
}
