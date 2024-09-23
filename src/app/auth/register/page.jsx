"use client"
import { registerUser } from "@/lib/data";
import Header from "@/components/Header"
import InputField from "@/components/InputField";
import PrimaryBtn from "@/components/PrimaryBtn"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";


const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // nationalId: '',
    // phoneNumber: '',
    email: '',

    province: '',
    district: '',
    sector: '',
    cell: '',

    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const registrationData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password_hashed: formData.password,
        province: formData.province,
        district: formData.district,
        sector: formData.sector,
        cell: formData.cell,
        national_id: formData.nationalId,
        phone_number: formData.phoneNumber
      };

      const response = await axiosInstance.post('/auth/register', registrationData);
      if (response.data.message === "Ok") {
        router.push("/auth/login");
      } else {
        alert("Registration failed. Please try again.");
      }
      console.log("response:: ", response);

      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };


  return (
    <section className="h-[100vh] w-full  flex items-center justify-center bg-[#E9EBED]">
        <div className="container flex flex-col items-center h-full text-[#494949] ">
          <div className="title mt-4">
            <Header title={"Register"}/>
          </div>
          <form action="" onSubmit={handleSubmit} className="mt-4">
            <div className="container flex flex-col gap-8">
                <div className="personal_info_section flex gap-12 mt-6">
                  <InputField 
                    fieldName={registerUser.personal_info.firstName}
                    placeholder={"Enter First Name"}
                    value={formData.firstName}
                    onChange={handleChange}
                    name="firstName"
                  />
                  <InputField 
                    fieldName={registerUser.personal_info.lastName}
                    placeholder={"Enter Last Name"}
                    value={formData.lastName}
                    onChange={handleChange}
                    name="lastName"
                  />
                </div>


                <div className="contact_info_section flex-col gap-2">
                  {/* <div className="flex gap-12">
                    <InputField 
                      fieldName={registerUser.contact_info.nationalId}
                      placeholder={"Enter National ID"}
                      value={formData.nationalId}
                      onChange={handleChange}
                      name="nationalId"
                    />
                    <InputField 
                      fieldName={registerUser.contact_info.phoneNumber}
                      placeholder={"Enter Phone number"}
                      value={formData.phoneNumber}
                      name="phoneNumber"
                    />
                  </div> */}
                  <InputField 
                    fieldName={registerUser.contact_info.email}
                    placeholder={"Enter Email"}
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                 />
                </div>


                <div className="adress_info_section flex flex-col gap-2">
                  <div className="flex gap-12">
                    <InputField 
                      fieldName={"Province"}
                      placeholder={"Enter Province"}
                      value={formData.province}
                      onChange={handleChange}
                      name="province"
                    />
                    <InputField 
                      fieldName={registerUser.address_info.district}
                      placeholder={"Enter District"}
                      value={formData.district}
                      onChange={handleChange}
                      name="district"
                    />
                  </div>
                  <div className="flex gap-12">
                    <InputField 
                      fieldName={registerUser.address_info.sector}
                      placeholder={"Enter Sector"}
                      value={formData.sector}
                      onChange={handleChange}
                      name="sector"
                    />
                    <InputField 
                      fieldName={registerUser.address_info.cell}
                      placeholder={"Enter Cell"}
                      value={formData.cell}
                      onChange={handleChange}
                      name="cell"
                    />
                  </div>
                  
                </div>


                <div className="acc_sec_section flex gap-12">
                  <InputField 
                    type="password"
                    fieldName={registerUser.acc_sec.password}
                    placeholder={"Enter Password"}
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <InputField 
                    type="password"
                    fieldName={registerUser.acc_sec.confirmPassword}
                    placeholder={"Confirm Password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                  />
                </div>
              </div>
            
            <div className="submit mt-8">
              <div>
                <button type="submit">
                    <PrimaryBtn 
                      title={"Register"}
                    />
                </button>
                <p>
                  Already hae an account? 
                  <Link href={"/auth/login"}>
                    <span className="font-bold underline ml-2">Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
    </section>
  )
}

export default SignUp