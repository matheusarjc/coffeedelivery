import { MapPin, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="page-width my-8 flex items-center justify-between">
        <div>
          <img onClick={goHome} src="src\assets\LogoCD.svg" alt="" />
        </div>
        <div className="flex items-center gap-3">
          <button
            id="geolocation-btn"
            className="text-[#4B2995] text-sm items-center p-2.5 bg-[#EBE5F9] rounded-md gap-1 hidden desktop:flex"
          >
            <MapPin size={22} color="#8047f8" weight="fill" />
            Porto Alegre, RS
          </button>

          <MapPin
            size={22}
            color="#8047f8"
            weight="fill"
            className="desktop:hidden flex"
          />
          <button className="bg-[#F1E9C9;] p-2 rounded-md">
            <ShoppingCart size={24} color="#c47f17" weight="fill" />
          </button>
        </div>
      </div>
    </header>
  );
}
