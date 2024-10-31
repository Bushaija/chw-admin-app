"use client";
import Link from "next/link";
import Header from "@/components/Header";
import InputField from "@/components/InputField";
import PrimaryBtn from "@/components/PrimaryBtn";
import axiosInstance from "../../../utils/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Loading state for feedback

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear any previous errors
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/auth/login", formData, {
        withCredentials: true,  // Ensure cookies are sent
      });
      if (response.data) {
        router.push("/admin");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#E9EBED] h-[100vh] flex items-center justify-center">
      <div className="container flex flex-col items-center h-full text-[#494949]">
        <Header title="Login" />
        <form onSubmit={handleSubmit} className="mt-4 w-[300px]">
          <div className="personal_info_section flex flex-col gap-4 mt-6">
            <InputField
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <InputField
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          {error && <div className="mt-4 text-red-600 text-center">{error}</div>}
          <div className="submit mt-8 flex flex-col items-center">
            <button type="submit" disabled={isLoading} className="w-full">
              <PrimaryBtn title={isLoading ? "Logging in..." : "Login"} />
            </button>
            <p className="mt-2 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/auth/register">
                <span className="font-bold underline ml-2">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
