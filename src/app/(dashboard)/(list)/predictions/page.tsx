import Table from "@/components/Table"
import Filter from "@/components/Filter"


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
        header: "Forecasted Quantity",
        accessor: "forecasted",
        className: "hidden md:table-cell",
    },
]

const predictionData = [
    {
        id: 1,
        name: "CHW1",
        commodityType: "MedroxyprogesteroneAcetate Table",
        quantity: "12"
    },
    {
        id: 2,
        name: "CHW2",
        commodityType: "MedroxyprogesteroneAcetate Table",
        quantity: "12"
    },
    {
        id: 3,
        name: "CHW3",
        commodityType: "MedroxyprogesteroneAcetate Table",
        quantity: "12"
    },
    {
        id: 4,
        name: "CHW4",
        commodityType: "MedroxyprogesteroneAcetate Table",
        quantity: "12"
    },
    {
        id: 5,
        name: "CHW5",
        commodityType: "MedroxyprogesteroneAcetate Table",
        quantity: "12"
    }
]


const PredictionPage = () => {
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
            Stock Level Prediction
        </h1>
        <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
            <Filter />
        </div>
        <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
        
            {/* list */}
            <div className="flex justify-center items-center mt-12">
                <Table 
                    columns={columns}
                    renderRow={renderRow}
                    data={predictionData}
                />
            </div>
        </div>
    </section>
  )
}

export default PredictionPage