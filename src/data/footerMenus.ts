interface FooterMenuItem {
  component: React.ReactNode;
  url: string;
}

interface FooterMenu {
  title: string;
  links: FooterMenuItem[];
}

const footerMenus: FooterMenu[] = [
  {
    title: "Sobre Nós",
    links: [
      { component: "Site Institucional", url: "/link1" },
      { component: "FALE CONOSCO", url: "/link2" },
      { component: "Carreiras", url: "/link7" },
      { component: "Veja as cidades", url: "/link8" },
    ],
  },
  {
    title: "Descubra",
    links: [
      { component: "Coffee delivery shop", url: "/link3" },
      { component: "Coffee delivery card", url: "/link4" },
      { component: "CD Empresas", url: "/link9" },
      { component: "Blog", url: "/link10" },
    ],
  },
];

export default footerMenus;
