"use client"
import Link from "next/link"
import Header from "@/components/Header"
import InputField from "@/components/InputField"
import PrimaryBtn from "@/components/PrimaryBtn"
import { registerUser } from "@/lib/data"
import axiosInstance from "../../../utils/axiosInstance"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignIn = () => {
  const router = useRouter()
  // const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    "email": "",
    "password": "",
  });

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axiosInstance.post('/auth/login', {
        "email": formData.email,
        "password": formData.password,
      });

      if (response.data) {
        router.push("/admin");
      }
    } catch (error) {
      if (error.response && error.response.status == 401) {
        setError("Invalid email or password. Please try again.")
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
      console.error("Invalid credentials. Please try again.");
    }
  };

  // if (error) return <div className="flex justify-center items-center">Error: {error}</div>

  return (
      <section className="bg-[#E9EBED] h-[100vh] w-full  flex items-center justify-center">
          <div className="container flex flex-col justify-center items-center h-full text-[#494949]">
            <div className="title mt-4">
              <Header title={"Login"}/>
            </div>
            <form onSubmit={handleSubmit} action="" className="mt-4 w-[300px]">
              <div className="flex justify-center items-center">
                  <div className="personal_info_section flex flex-col gap-4 mt-6">
                    <InputField 
                      type={"email"}
                      fieldName={registerUser.contact_info.email}
                      placeholder={"Enter Email"}
                      value={formData.email}
                      onChange={handleChange}
                      name={"email"}
                    />
                    <InputField
                      type={"password"}
                      fieldName={registerUser.acc_sec.password}
                      placeholder={"Enter Password"}
                      value={formData.password}
                      onChange={handleChange} 
                      name={"password"}
                    />

                  </div>
              </div>
              {
                error &&
                (
                  <div className="mt-4 text-red-600 text-center">
                    {error}
                  </div>
                )
              }
              <div className="submit mt-8">
                <div>
                  <button type="submit">
                    <PrimaryBtn 
                      title={"Login"}
                    />
                  </button>
                  <p className="mt-2 text-center">
                    Don't have an account? 
                    <Link href={"/auth/register"}>
                      <span className="font-bold underline ml-2">Register</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
      </section>
    )
}

//

export default SignIn