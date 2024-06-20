import { getUser } from "@/mocks/apiMocks";
import { User } from "@/models/models";
import { useEffect, useState } from "react";

const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const retrievedUser = await getUser();
      setUser(retrievedUser);
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  return { isLoading, user };
};

export default useFetchUser;
