import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/auth";

const queryKey: string[] = ["users"];

export const useGetUsers = () => {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => getUsers(),
  });
};
