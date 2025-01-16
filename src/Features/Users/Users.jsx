import React, { useEffect, useState } from "react";
import useCheckAcceptRules from "../../hooks/customhook/useCheckAcceptRules";
import { getUsers } from "@/Services/getusers";

export default function Users() {
  // const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getUsersFN = async () => {
      try {
        setLoading(true);
        const users = await getUsers({ signal: controller.signal });
        setUsers(users);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch users:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    getUsersFN();

    return () => {
      controller.abort();
    };
  }, []);
  useCheckAcceptRules();
  return isLoading ? (
    <h2>Loading ..</h2>
  ) : (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user._id}
              className=" overflow-hidden shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <img
                src={user.photo}
                alt={user.username}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{user.username}</h3>
                <p className=" text-gray-400 text-sm leading-relaxed">
                  {user.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
