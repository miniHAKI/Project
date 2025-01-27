import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [flashSaleIndex, setFlashSaleIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const flashSaleItems = [1, 2, 3, 4, 5, 6];
  const categoryItems = [1, 2, 3, 4, 5, 6, 7];
  const itemsPerPage = 4;

  const scrollImages = [
    "/src/assets/scroll-img1.jpeg",
    "/src/assets/scroll-img2.jpeg",
    "/src/assets/scroll-img3.jpeg",
    "/src/assets/scroll-img4.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll function every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % scrollImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleFlashSaleNext = () => {
    if (flashSaleIndex + itemsPerPage < flashSaleItems.length) {
      setFlashSaleIndex(flashSaleIndex + 1);
    }
  };

  const handleFlashSalePrev = () => {
    if (flashSaleIndex > 0) {
      setFlashSaleIndex(flashSaleIndex - 1);
    }
  };

  const handleCategoryNext = () => {
    if (categoryIndex + itemsPerPage < categoryItems.length) {
      setCategoryIndex(categoryIndex + 1);
    }
  };

  const handleCategoryPrev = () => {
    if (categoryIndex > 0) {
      setCategoryIndex(categoryIndex - 1);
    }
  };

  return (
    <div className="w-[80%] mx-auto"> {/* Added margin and width adjustment */}
      {/* Top Header */}
      <header className="flex justify-between items-center bg-gray-200 p-4 text-sm text-gray-800">
        <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
        <Link to="/shop" className="text-blue-600 font-semibold cursor-pointer">
          ShopNow
        </Link>
        <div className="flex items-center gap-2">
          <span>English</span>
          <img width={30} height={30} src="/src/assets/dropdown.png" alt="dropdown icon" />
        </div>
      </header>

      {/* Side Menu & Scroll img */}
      <div className="flex p-4">
        <div className="flex flex-col gap-4 w-60">
          <div>Women's Fashion</div>
          <div>Men's Fashion</div>
          <div>Electronics</div>
          <div>Home & Lifestyle</div>
          <div>Medicine</div>
          <div>Sports & Outdoor</div>
          <div>Baby’s & Toys</div>
          <div>Groceries & Pets</div>
          <div>Health & Beauty</div>
        </div>
        <div className="ml-8 w-full h-96 relative overflow-hidden">
          <img
            src={scrollImages[currentImage]}
            alt="Scroll img"
            className="w-full h-full object-cover transition-all duration-500"
          />
          <Link className="absolute bottom-8 left-10 text-white underline"> Shop Now </Link>
          <img
            className="absolute bottom-7 left-32 text-white"
            width={30}
            height={30}
            src="/src/assets/rightarrow.png"
            alt="next"
          />
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <span className="w-3 h-6 bg-red-500 rounded"></span>
          <span className="text-lg font-semibold">Today's</span>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="text-lg font-bold">Flash Sales</div>
          <div className="flex gap-4">
            <div>
              <span className="block text-gray-500 text-sm">Days</span>
              <span className="text-xl font-bold">03</span>
            </div>
            <div>
              <span className="block text-gray-500 text-sm">Hours</span>
              <span className="text-xl font-bold">08</span>
            </div>
            <div>
              <span className="block text-gray-500 text-sm">Minutes</span>
              <span className="text-xl font-bold">06</span>
            </div>
            <div>
              <span className="block text-gray-500 text-sm">Seconds</span>
              <span className="text-xl font-bold">09</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={handleFlashSalePrev} disabled={flashSaleIndex === 0}>
              <img width={30} height={30} src="/src/assets/leftarrow.png" alt="previous" />
            </button>
            <button
              onClick={handleFlashSaleNext}
              disabled={flashSaleIndex + itemsPerPage >= flashSaleItems.length}
            >
              <img width={30} height={30} src="/src/assets/rightarrow.png" alt="next" />
            </button>
          </div>
        </div>

        {/* Flash Sale Slider */}
        <div className="overflow-hidden relative w-full">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${flashSaleIndex * 310}px)` }}>
            {flashSaleItems.map((_, index) => (
              <div key={index} className="min-w-[280px] h-[200px] bg-white rounded-lg shadow p-4 mx-2 flex flex-col items-center justify-center">
                <img width={100} height={100} src="/source/product.png" alt="card img" />
                <div className="mt-2 text-sm font-semibold text-red-500">30% off</div>
                <div className="text-gray-600">Product Name</div>
                <div className="font-bold">$100</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="p-4">
        <div className="flex items-center gap-4">
          <span className="w-3 h-6 bg-red-500 rounded"></span>
          <span className="text-lg font-semibold">Category</span>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="text-lg font-bold">Browse By Category</div>
          <div className="flex gap-4">
            <button onClick={handleCategoryPrev} disabled={categoryIndex === 0}>
              <img width={30} height={30} src="/src/assets/leftarrow.png" alt="previous" />
            </button>
            <button
              onClick={handleCategoryNext}
              disabled={categoryIndex + itemsPerPage >= categoryItems.length}
            >
              <img width={30} height={30} src="/src/assets/rightarrow.png" alt="next" />
            </button>
          </div>
        </div>

        {/* Category Slider */}
        <div className="overflow-hidden relative w-full">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${categoryIndex * 210}px)` }}>
            {categoryItems.map((_, index) => (
              <div key={index} className="min-w-[180px] h-[150px] bg-white rounded-lg shadow p-4 mx-2 flex flex-col items-center justify-center">
                <div className="text-2xl">Icon</div>
                <div className="mt-2 text-gray-600">Name</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
