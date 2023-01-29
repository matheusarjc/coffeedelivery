import { ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <header>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <input type="text" />
          <button>
            <ShoppingCart size={24} color="#c47f17" weight="fill" />
          </button>
        </div>
      </div>
    </header>
  );
}
