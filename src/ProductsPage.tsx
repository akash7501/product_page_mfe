interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const products: Product[] = [
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1999 },
    { id: 3, name: "AirPods Pro", price: 249 },
    { id: 4, name: "Apple Watch Ultra", price: 799 },
  ];

  const addToCart = (product: Product) => {
    window.dispatchEvent(
      new CustomEvent("cart:add", {
        detail: product,
      })
    );
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <header style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ 
          fontSize: "36px", 
          fontWeight: "700", 
          color: "#2d3436",
          letterSpacing: "-0.5px"
        }}>
          Premium Products
        </h1>
        <p style={{ color: "#636e72", fontSize: "18px" }}>Explore our latest high-end collection</p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "none",
              borderRadius: "16px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onMouseOver={(e) => {
               e.currentTarget.style.transform = "translateY(-5px)";
               e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e) => {
               e.currentTarget.style.transform = "translateY(0)";
               e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
            }}
          >
            <div>
              <div style={{ 
                height: "180px", 
                background: "#f0f2f5", 
                borderRadius: "12px", 
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px"
              }}>
                {product.name.includes("iPhone") ? "📱" : 
                 product.name.includes("MacBook") ? "💻" : 
                 product.name.includes("AirPods") ? "🎧" : "⌚"}
              </div>
              <h2 style={{ 
                fontSize: "22px", 
                fontWeight: "600", 
                marginBottom: "8px",
                color: "#2d3436"
              }}>
                {product.name}
              </h2>
              <p style={{ 
                fontSize: "24px", 
                fontWeight: "700", 
                color: "#00b894",
                marginBottom: "20px"
              }}>
                ${product.price}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(to right, #6c5ce7, #a29bfe)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "16px",
                cursor: "pointer",
                transition: "opacity 0.2s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}