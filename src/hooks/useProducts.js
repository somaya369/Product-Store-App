import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../services/api";
export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
export const useProductById = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id),
        enabled: !!id, // Only run the query if id is truthy
    });
}