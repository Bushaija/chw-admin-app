import Table from "@/components/Table"
import Filter from "@/components/Filter"
import UserCard from "@/components/UserCard";

type Prediction = {
    id: number;
    teacherId: string;
    name: string;
    email?:string;
}

const columns = [
    {
        header: "Name",
        accessor: "name",
    },
    {
        header: "Commodity Type",
        accessor: "commodity",
        className: "hidden md:table-cell",
    },
    {
        header: "Inventory Level",
        accessor: "forecasted",
        className: "hidden md:table-cell",
    },
]

const medicines = [
    {
        "id": 1,
        "name": "Rapid Diagnostic Test",
    },
    {
        "id": 2,
        "name": "Arthemether_20mg_lumef_antrine_120mg_Tab_6x1",
    },
    {
        "id": 3,
        "name": "Arthemether_20mg_lumef_antrine_120mg_Tab_6x2",
    },
    {
        "id": 4,
        "name": "Arthemether_20mg_lumef_antrine_120mg_Tab_6x3",
    },
    {
        "id": 5,
        "name": "Arthemether_20mg_lumef_antrine_120mg_Tab_6x4",
    },
    {
        "id": 6,
        "name": "Bed Net",
    }
]

const InventoryPage = () => {
    const renderRow = (item: Prediction) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-300">
            <td className="p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.commodityType}</td>
            <td className="hidden md:table-cell text-center">{item.quantity}</td>
        </tr>
    )
    
  return (
    <section className="">
        <h1 className="m-4 hidden md:block text-lg font-bold text-green-500">
            Inventory Level
        </h1>
        <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
            <Filter />
        </div>
        <div className="w-full flex flex-col gap-4 px-4">
            <div className="flex items-center gap-4 w-full">
                {
                    medicines.map(item => {
                        if(item.id < 4) {
                            return (<div key={item.id} className="w-full">
                                <UserCard type={item.name} />
                            </div>)
                        }
                    })
                }
            </div>
            <div className="flex items-center gap-4 w-full">
                {
                    medicines.map(item => {
                        if(item.id > 3) {
                            return(
                                <div key={item.id} className="w-full">
                                    <UserCard type={item.name} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default InventoryPage