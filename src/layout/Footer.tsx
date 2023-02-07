import footerMenus from "../data/footerMenus";
import { socialsLogo } from "../data/socialsLogo";

export function Footer() {
  return (
    <footer className="bg-[#DBAC2C] py-6">
      <div className="page-width flex flex-col justify-center">
        <div className="flex justify-center">
          <img src="src\assets\LogoCD.svg" alt="CD Logo" />
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-stone-600 border-0 rounded " />
        <div className="flex justify-center">
          {socialsLogo.map((svg, i) => (
            <a key={i} href={svg.url}>
              {svg.logo}
            </a>
          ))}
        </div>
        <div className="flex flex-col py-6 desktop:flex-row desktop:text-left desktop:justify-center items-center text-center gap-6">
          {footerMenus.map((menu, index) => (
            <nav key={index}>
              <h2 className="text-xl font-[700] text-[#272221]">
                {menu.title}
              </h2>
              <ul className="">
                {menu.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-sm uppercase text-[#403937]"
                    >
                      {link.component}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex justify-center text-stone-600">
          <span>Copyright - 2023</span>
        </div>
      </div>
    </footer>
  );
}
