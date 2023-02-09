import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../utils/QuantityInput";

export function MainProduct() {
  return (
    <div className="bg-[#F3F2F2] relative pb-5 px-6 rounded-[6px_36px] flex flex-col justify-center max-w-[256px] self-start mt-6">
      <div className="-mt-5 flex justify-center">
        <img src="src\assets\Coffee1.svg" alt="" />
      </div>
      <div className="flex gap-1 justify-center">
        <span className="py-1 px-2 bg-[#F1E9C9] rounded-full text-[10px] roboto font-bold text-[#C47F17] mt-2 ">
          TRADICIONAL
        </span>
        <span className="py-1 px-2 bg-[#F1E9C9] rounded-full text-[10px] roboto font-bold text-[#C47F17] mt-2 ">
          COM LEITE
        </span>
      </div>

      <div className="mt-4">
        <span className="baloo font-bold text-xl text-[#403937] text-center">
          Expresso Tradicional
        </span>
        <p className="text-[#8D8686] text-sm roboto">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>

      <div className="flex justify-between mt-9">
        <div className="text-[#574F4D] flex items-center justify-center gap-1">
          <span className="text-sm roboto">R$</span>
          <span className="font-extrabold text-2xl baloo">9,90</span>
        </div>
        <div className=" flex gap-2">
          <QuantityInput />
          <button className="p-2 bg-[#4B2995] rounded hover:bg-[#9747FF] border-none">
            <ShoppingCart size={22} color="#F3F2F2" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
