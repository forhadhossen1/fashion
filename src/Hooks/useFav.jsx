import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFav = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: fav = [], refetch } = useQuery({
        queryKey: ['fav', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/favourite?email=${user?.email}`)
            return res.data;
        }
    })

    return [fav, refetch];
};

export default useFav;