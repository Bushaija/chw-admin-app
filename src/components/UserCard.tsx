import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl bg-[#D9D9D9] p-4 flex-1 min-w-[130px] text-center">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className="text-3xl font-black my-2">12</h1>
            <h1 className="capitalize text-sm font-semibold text-gray-50O">{type}s</h1>
        </div>
    )
}

export default UserCard;