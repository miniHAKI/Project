import React, { useState } from "react";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    "https://imgs.search.brave.com/VVvfwWzSAab6tETlJXApRc2PWDx5AnBWjWTNRIzgq4E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZ2Ft/ZS1jb250cm9sbGVy/LWJ1dHRvbi1mdW5j/dGlvbnMtZGlhZ3Jh/bS1oMjBuN2Z3YWo2/OXh5cmFxLTIucG5n"
  );

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const thumbnailImages = [
    "https://imgs.search.brave.com/W6IgaNb5PSSo1xDbwAnh171eWrWwwt_vTjaqF_mtHi4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmxh/Y2stcGxheS1zdGF0/aW9uLWNvbnRyb2xs/ZXJ3aXRoLWJsdWUt/bGlnaHRiYXItdjIx/NjIyejhjYjZyaGhq/bi0yLnBuZw",
    "https://imgs.search.brave.com/mH6TMyACvHVKNvRYaUu4MLm9IA8gQu-laStDeCamssE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9HYW1l/LUNvbnRyb2xsZXIt/UE5HLnBuZw",
    "https://imgs.search.brave.com/a738uI7PaykrbkZboCqGRXNLI6gYLG3Ta-T1mLS_U38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2FtZXBhZC9z/bWFsbC9nYW1lcGFk/X1BORzg3LnBuZw",
    "https://imgs.search.brave.com/tmv9_rMbLld2HYbFLA_ulmoAI-Mt3L29x_kcyOnFAZQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZ2FtZXBhZC9z/bWFsbC9nYW1lcGFk/X1BORzg5LnBuZw",
  ];

  return (
    <div className="w-full px-4 md:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images Section */}
        <div>
          <div className="mb-4">
            <img src={mainImage} alt="Product" className="w-full rounded-lg" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {thumbnailImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="cursor-pointer border border-gray-300 rounded-lg"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center mb-2">
            <div className="text-yellow-400 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <span className="text-gray-500 ml-2">(150 Reviews)</span>
            <span className="ml-4 text-green-500 font-semibold">In Stock</span>
          </div>
          <p className="text-2xl font-semibold mb-4">$192.00</p>
          <p className="text-gray-600 mb-4">
            PlayStation 5 Controller Skin. High-quality vinyl with air channel
            adhesive for easy bubble-free installation & mess-free removal.
            Pressure sensitive.
          </p>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Colours:</h3>
            <div className="flex items-center gap-4">
              {["bg-gray-200", "bg-blue-500", "bg-red-500", "bg-green-500"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full cursor-pointer border ${color}`}
                  ></div>
                )
              )}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Size:</h3>
            <div className="flex gap-4">
              {[
                { label: "XS", value: "xs" },
                { label: "S", value: "s" },
                { label: "M", value: "m" },
                { label: "L", value: "l" },
                { label: "XL", value: "xl" },
              ].map((size) => (
                <button
                  key={size.value}
                  className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="text-xl font-bold"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="text-xl font-bold"
              >
                +
              </button>
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
              Buy Now
            </button>
          </div>

          {/* Delivery and Return Info */}
          <div className="mt-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-green-500 font-semibold">Free Delivery</span>
              <p className="text-gray-500 text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-semibold">Return Delivery</span>
              <p className="text-gray-500 text-sm">
                Free 30 Days Delivery Returns. <a href="#">Details</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
