import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <div className="flex flex-1 items-center justify-between gap-1 rounded-md bg-[#E6E5E5] text-center px-2">
      <button type="button" className="transition duration-500">
        <Minus className="iconInput" size={14} color="#8047F8" weight="fill" />
      </button>
      <input
        type="number"
        readOnly
        value={1}
        className="bg-transparent text-center w-full border-0 text-[#272221] focus:outline-0"
      />
      <button type="button">
        <Plus className="iconInput" size={14} color="#8047F8" weight="fill" />
      </button>
    </div>
  );
}
