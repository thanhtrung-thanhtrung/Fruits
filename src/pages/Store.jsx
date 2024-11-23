import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";

const Store = () => {
  const { products, search, showsearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  useEffect(() => {
    let filteredProducts = [...products];

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    if (search && showsearch) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedTypes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedTypes.includes(product.type)
      );
    }

    switch (sortOption) {
      case "low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProduct(filteredProducts);
  }, [
    products,
    selectedCategories,
    selectedTypes,
    sortOption,
    search,
    showsearch,
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="lg:hidden w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4"
          >
            <span className="font-medium">FILTERS</span>
            <img
              className={`w-4 h-4 transition-transform ${
                showFilter ? "rotate-180" : ""
              }`}
              src={assets.dropdown_icon}
              alt="Toggle Filters"
            />
          </button>

          <div
            className={`space-y-6 ${showFilter ? "block" : "hidden"} lg:block`}
          >
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-4">CATEGORIES</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedCategories.includes("Fruit")}
                    onChange={() => handleCategoryChange("Fruit")}
                  />
                  <span className="text-gray-600">Fruits</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedCategories.includes("Box")}
                    onChange={() => handleCategoryChange("Box")}
                  />
                  <span className="text-gray-600">Gift Basket</span>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-4">FRUIT BY TYPE</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedTypes.includes("Tropical")}
                    onChange={() => handleTypeChange("Tropical")}
                  />
                  <span className="text-gray-600">Tropical Fruit</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedTypes.includes("Seasonal")}
                    onChange={() => handleTypeChange("Seasonal")}
                  />
                  <span className="text-gray-600">Seasonal fruits</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedTypes.includes("Imported")}
                    onChange={() => handleTypeChange("Imported")}
                  />
                  <span className="text-gray-600">Imported fruit</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <Title text1="ALL" text2="STORE" />
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low-high</option>
              <option value="high-low">Sort by: High-high</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filterProduct.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col"
              >
                <div className="relative pb-[100%] mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                <p className="text-lg font-semibold text-gray-900 mt-auto">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
