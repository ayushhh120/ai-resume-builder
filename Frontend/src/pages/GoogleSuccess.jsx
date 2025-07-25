
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return <div>Logging in with Google...</div>;
};

export default GoogleSuccess;
