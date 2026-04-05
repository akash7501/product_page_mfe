
export default function ProductsPage() {
  const addToCart = () => {
    window.dispatchEvent(
      new CustomEvent("cart:add", {
        detail: { id: 1, name: "iPhone", price: 999 },
      })
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Products</h1>

      <div className="mt-4 p-4 border rounded">
        <h2>iPhone</h2>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}