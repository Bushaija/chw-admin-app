"use client";
import React, { useState } from "react";
import Filter from "@/components/Filter";
import UserCard from "@/components/UserCard";

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

// Static list of medicines
const medicines = [
    { id: 1, name: "Rapid Diagnostic Test", category: "malaria" },
    { id: 2, name: "Arthemether_20mg_lumef_antrine_120mg_Tab_6x1", category: "malaria" },
    { id: 3, name: "Arthemether_20mg_lumef_antrine_120mg_Tab_6x2", category: "malaria" },
    { id: 4, name: "Arthemether_20mg_lumef_antrine_120mg_Tab_6x3", category: "malaria" },
    { id: 5, name: "Arthemether_20mg_lumef_antrine_120mg_Tab_6x4", category: "malaria" },
    { id: 6, name: "Bed Net", category: "family_planning" },
];

// InventoryPage component
const InventoryPage = () => {
    // State to track selected category filter
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Filtered medicines based on the selected category
    const filteredMedicines = selectedCategory
        ? medicines.filter((medicine) => medicine.category === categories[selectedCategory - 1])
        : medicines;

    return (
        <section className="">
            <h1 className="m-4 hidden md:block text-lg font-bold text-green-500">
                Inventory Level
            </h1>

            {/* Filter component to select category */}
            <div className="bg-[#f6f5ec] p-4 rounded-md flex-1 m-4 mt-8 pb-[2rem] w-full">
                <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>

            {/* Display filtered medicines in rows */}
            <div className="w-full flex flex-col gap-4 px-4">
                <div className="flex items-center gap-4 w-full">
                    {filteredMedicines.map((item) => (
                        <div key={item.id} className="w-full">
                            <UserCard type={item.name} count={""}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InventoryPage;
