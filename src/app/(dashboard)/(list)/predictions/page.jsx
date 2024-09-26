"use client"
import { useContext, useState } from "react";
import Table from "@/components/Table"
import Filter from "@/components/Filter"
import { DashboardContext } from "@/contexts/DashboardProvider";
import medicalItems from "@/data/medical_items.json";


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

const categories = [
    "malaria",
    "diarrhea",
    "tuberculosis",
    "pneumonia_bacterial_infections",
    "parasitic_infections",
    "family_planning",
    "nutrition_supplements",
    "equipments",
  ];


const PredictionPage = () => {

    const { stockLevels, advisors } = useContext(DashboardContext);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // State to track selected category filter
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Ensure we have stock levels and advisor data
    if (!stockLevels || !advisors) {
        return <div>Loading...</div>;
    }

    // Map stock levels to include category based on stock_item_code
    const predictionData = stockLevels.map((stock) => {
        const advisor = advisors.find((advisor) => advisor.id === stock.healthcare_advisor_id);
        const itemCategory = medicalItems.find(item => item.stock_item_code === stock.stock_item_code)?.item_category || "Unknown";
        return {
            id: stock.id,
            name: advisor ? advisor.first_name + " " + advisor.last_name : "Unknown CHW",
            commodityType: stock.stock_item_code,
            quantity: stock.quantity,
            status: stock.status,
            category: itemCategory,
        };
    });


    // Filter data based on selected category (if any)
    const filteredData = selectedCategory
        ? predictionData.filter(item => item.category === categories[selectedCategory - 1])
        : predictionData;

    // Calculate total pages based on filtered data
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Get the current set of rows for the current page
    const currentRows = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Pagination functions
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderRow = (item) => (
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
            <Filter 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
            />
        </div>
        <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
        
            {/* list */}
            <div className="flex justify-center items-center mt-12">
                <Table 
                    columns={columns}
                    renderRow={renderRow}
                    data={currentRows}
                />
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
                <button 
                    onClick={goToPreviousPage} 
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button 
                    onClick={goToNextPage} 
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    </section>
  )
}

export default PredictionPage