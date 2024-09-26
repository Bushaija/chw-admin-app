"use client";
import React, { useState, useContext } from "react";
import Table from "@/components/Table";
import Filter from "@/components/Filter";
import { DashboardContext } from "@/contexts/DashboardProvider";
import medicalItems from "@/data/medical_items.json";

const columns = [
    {
        header: "Name",
        accessor: "name",
    },
    {
        header: "Commodity Type",
        accessor: "commodityType",
        className: "hidden md:table-cell",
    },
    {
        header: "Quantity",
        accessor: "quantity",
        className: "hidden md:table-cell",
    },
];

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



const StockPage = () => {
    const { stockLevels, advisors } = useContext(DashboardContext);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5

    
    // State to manage selected category for filtering
    const [selectedCategory, setSelectedCategory] = useState(null);

    if(!stockLevels || !advisors) {
        return <div>Loading...</div>
    }
    
    const predictionData = stockLevels.map((stock) => {
        const advisor = advisors.find((advisor) => advisor.id === stock.healthcare_advisor_id);
        const itemCategory = medicalItems.find(item => item.stock_item_code === stock.stock_item_code)?.item_category || "Unknown"
        return {
            id: stock.id,
            name: advisor ? advisor.first_name + " " + advisor.last_name : "Unknown CHW",
            commodityType: stock.stock_item_code,
            quantity: stock.stock_item_code.length,
            category: itemCategory,
        }
    })

    // Filter the prediction data based on selected category
    const filteredData = selectedCategory
    ? predictionData.filter(item => item.category === categories[selectedCategory - 1])
    : predictionData;
    
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const currentRows = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    )

    const goToNextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Row rendering function
    const renderRow = (item) => (
        <tr key={item.id} className="border-b text-gray-400 border-gray-200 even:bg-slate-50 text-sm hover:bg-[#c8f7be] hover:text-gray-500">
            <td className="p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.name}</h3>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.commodityType}</td>
            <td className="hidden md:table-cell text-center">{item.quantity}</td>
        </tr>
    );

    return (
        <section className="">
            <h1 className="m-4 hidden md:block text-lg font-bold text-green-500">
                Stock Level
            </h1>

            {/* Filter component to select the category */}
            <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
                <Filter 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                    // categories={categories}
                />
            </div>

            {/* Display filtered data in the table */}
            <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
                <div className="flex justify-center items-center mt-12">
                    <Table 
                        columns={columns}
                        renderRow={renderRow}
                        data={currentRows}
                    />
                </div>
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
    );
};

export default StockPage;
