import Link from "next/link"
import Header from "@/components/Header"
import InputField from "@/components/InputField"
import PrimaryBtn from "@/components/PrimaryBtn"
import { registerUser } from "@/lib/data"

const SignIn = () => {
    return (
        <section className="bg-[#E9EBED] h-[100vh] w-full  flex items-center justify-center">
            <div className="container flex flex-col justify-center items-center h-full text-[#494949]">
              <div className="title mt-4">
                <Header title={"Login"}/>
              </div>
              <form action="" className="mt-4 w-[300px]">
                <div className="flex justify-center items-center">
                    <div className="personal_info_section flex flex-col gap-4 mt-6">
                      <InputField 
                        fieldName={registerUser.contact_info.phoneNumber}
                        placeholder={"Enter Phone Number"}
                      />
                    <InputField 
                        type="password"
                        fieldName={registerUser.acc_sec.password}
                        placeholder={"Enter Password"}
                      />
                    </div>
                </div>
                <div className="submit mt-8">
                  <div>
                    <Link href={"/admin"}>
                      <PrimaryBtn 
                        title={"Login"}
                      />
                    </Link>
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

export default SignIn