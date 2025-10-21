import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  fullName: string;
  email: string;
}

const FetchUserDetails: React.FC = () => {
  const [userDetail, setUserDetail] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const savedUser = localStorage.getItem("randomUser");

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (savedUser) {
      setUserDetail(JSON.parse(savedUser));
    }
  }, [savedUser]);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://randomuser.me/api");
      const { results } = response.data;
      const {
        name: { title, first, last },
        email,
      } = results[0];
      let userDetailObj: User = {
        fullName: `${title} ${first} ${last}`,
        email,
      };
      localStorage.setItem("randomUser", JSON.stringify(userDetailObj));
    } catch (err: any) {
      setError(err.message ?? "API Request Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Random User Info</h2>
      {loading ? (
        <p>Loading...</p>
      ) : !error ? (
        <div className="user-detail">
          <strong>Full Name:</strong> {userDetail?.fullName ?? "—"} <br />
          <br />
          <strong>Email:</strong> {userDetail?.email ?? "—"}
        </div>
      ) : (
        <div className="error-message">{error}</div>
      )}

      <button className="refresh-btn" onClick={fetchUser}>
        Refresh
      </button>
    </>
  );
};

export default FetchUserDetails;