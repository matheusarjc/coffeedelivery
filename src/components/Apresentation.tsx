import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Apresentation() {
  return (
    <div className=" flex flex-col gap-1 px-[3.25rem] py-16 desktop:px-40">
      <div className="desktop:grid desktop:grid-cols-2  ">
        <div className=" gap-3 flex flex-col desktop:justify-between">
          <div className="">
            <h1 className="baloo text-4xl font-extrabold text-[#272221] text-center desktop:text-left desktop:text-5xl ">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base roboto text-center desktop:text-left desktop:text-xl desktop:mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="hidden desktop:flex desktop:justify-between desktop:flex-wrap desktop:gap-5 ">
            <div className="flex flex-row items-center gap-3">
              <span className="bg-[#C47F17] p-2 rounded-full">
                <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#574F4D] p-2 rounded-full">
                <Package size={16} color="#FFFFFF" weight="fill" />
              </span>
              <p className="desktop:text-base">
                Embalagem mantém o café intacto
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#DBAC2C] p-2 rounded-full">
                <Timer size={16} color="#FFFFFF" weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="flex items-center gap-3 desktop:mr-2">
              <span className="bg-[#8047F8] p-2 rounded-full">
                <Coffee size={16} color="#FFFFFF" weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div className="desktop:flex desktop:justify-end">
          <img src="src\assets\CoffeeImageHero.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-2 desktop:hidden">
        <div className="flex flex-row items-center gap-3">
          <span className="bg-[#C47F17] p-2 rounded-full">
            <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
          </span>
          <p>Compra simples e segura</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#574F4D] p-2 rounded-full">
            <Package size={16} color="#FFFFFF" weight="fill" />
          </span>
          <p>Embalagem mantém o café intacto</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#DBAC2C] p-2 rounded-full">
            <Timer size={16} color="#FFFFFF" weight="fill" />
          </span>
          <p>Entrega rápida e rastreada</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#8047F8] p-2 rounded-full">
            <Coffee size={16} color="#FFFFFF" weight="fill" />
          </span>
          <p>O café chega fresquinho até você</p>
        </div>
      </div>
    </div>
  );
}
