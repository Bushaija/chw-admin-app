import Table from "@/components/Table"

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
        header: "Quantity",
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


const StockPage = () => {
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
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-24 pb-[2rem] w-full">
        {/* top */}
        <div className="flex items-center justify-between">
            <h1 className="hidden md:block text-lg font-bold text-green-500">
               Stock Level
            </h1>
            {/* <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-4 self-end">

                </div>
            </div> */}
        </div>
        {/* list */}
        <div className="flex justify-center items-center mt-12">
            <Table 
                columns={columns}
                renderRow={renderRow}
                data={predictionData}
            />
        </div>
        {/* pagination */}
    </div>
  )
}

export default StockPage