import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useAuthContext();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const cantidadProductos = cart.length;

  return (
    <nav
      style={{
        backgroundColor: "#4CAF50",
        padding: "1rem",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <h2 style={{ margin: 0 }}>Mi Tienda</h2>

        {/* MENÚ */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {/* Cuando NO hay usuario */}
          {!user && (
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          )}

          {/* Cuando HAY usuario */}
          {user && (
            <>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>

              <Link
                to="/productos"
                style={{ color: "white", textDecoration: "none" }}
              >
                Productos
              </Link>

              {/* 🛒 CARRITO CON ICONO + TEXTO + INDICADOR */}
              <Link
                to="/carrito"
                style={{
                  color: "white",
                  textDecoration: "none",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <FaShoppingCart size={18} />
                <span>Carrito</span>

                {cantidadProductos > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-12px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {cantidadProductos}
                  </span>
                )}
              </Link>

              <Link
                to="/dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Dashboard
              </Link>

              <Link
                to="/add-product"
                style={{ color: "white", textDecoration: "none" }}
              >
                Agregar Producto
              </Link>

              {/* Bienvenida */}
              <span style={{ color: "#ccc", fontStyle: "italic" }}>
                Bienvenida, {user.email}
              </span>

              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "1px solid white",
                  padding: "0.3rem 0.7rem",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
