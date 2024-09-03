// import { Header, InputField, PrimaryBtn } from "../components"
import { registerUser } from "@/lib/data"
import Header from "@/components/Header"
import InputField from "@/components/InputField"
import PrimaryBtn from "@/components/PrimaryBtn"
import Link from "next/link"


const SignUp = () => {
  return (
    <section className="h-[100vh] w-full  flex items-center justify-center bg-[#E9EBED]">
        <div className="container flex flex-col items-center h-full text-[#494949] ">
          <div className="title mt-4">
            <Header title={"Register"}/>
          </div>
          <form action="" className="mt-4">
            <div className="container flex flex-col gap-8">
                <div className="personal_info_section flex gap-12 mt-6">
                  <InputField 
                    fieldName={registerUser.personal_info.firstName}
                    placeholder={"Enter First Name"}
                  />
                <InputField 
                    fieldName={registerUser.personal_info.lastName}
                    placeholder={"Enter Last Name"}
                  />
                </div>


                <div className="contact_info_section flex-col gap-2">
                  <div className="flex gap-12">
                    <InputField 
                      fieldName={registerUser.contact_info.nationalId}
                      placeholder={"Enter National ID"}
                    />
                    <InputField 
                      fieldName={registerUser.contact_info.phoneNumber}
                      placeholder={"Enter Phone number"}
                    />
                  </div>
                  <InputField 
                    fieldName={registerUser.contact_info.email}
                    placeholder={"Enter Email"}
                 />
                </div>


                <div className="adress_info_section flex flex-col gap-2">
                  <div className="flex gap-12">
                    <InputField 
                      fieldName={registerUser.address_info.district}
                      placeholder={"Enter District"}
                    />
                    <InputField 
                      fieldName={registerUser.address_info.sector}
                      placeholder={"Enter Sector"}
                    />
                  </div>
                  <InputField 
                    fieldName={registerUser.address_info.cell}
                    placeholder={"Enter Cell"}
                  />
                </div>


                <div className="acc_sec_section flex gap-12">
                  <InputField 
                    type="password"
                    fieldName={registerUser.acc_sec.password}
                    placeholder={"Enter Password"}
                  />
                  <InputField 
                    type="password"
                    fieldName={registerUser.acc_sec.confirmPassword}
                    placeholder={"Confirm Password"}
                  />
                </div>
              </div>
            
            <div className="submit mt-8">
              <div>
                <Link href={"/admin"}>
                    <PrimaryBtn 
                      title={"Register"}
                    />
                </Link>
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