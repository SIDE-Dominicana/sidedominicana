const phoneNumber = '18098704457';
const message = 'Hola, quiero realizar una consulta.';
const encodedMessage = encodeURIComponent(message);
const cotizar = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const cardpricinglist = [
    {
      title: "Constitución y Formalización",
      description: "Plan de Concepción",
      price: "",
      list: [
        {
          icon: "fas fa-folder-open",
          text: "Nombre Comercial",
        },
        {
          icon: "fab fa-sketch",
          text: "Registro Mercantil",
        },
        {
          icon: "fas fa-archive",
          text: "RNC, Oficina Virtual, comprobantes fiscales",
        },
        {
          icon: "fas fa-users-cog",
          text: "TSS, Ministerio de Trabajo, RPE",
        },
        {
          icon: "fas fa-stamp",
          text: "Logo Empresa y Sello",
        },
      ],
      button: {
        color: "red",
        children: "Cotizar",
        href: cotizar
      },
    },
    {
      title: "Constitución e Identidad Corporativa",
      description: "Plan de Concepción e Identidad Corporativa",
      price: "",
      list: [
        {
          icon: "fas fa-folder-open",
          text: "Nombre Comercial",
        },
        {
          icon: "fab fa-sketch",
          text: "Registro Mercantil",
        },
        {
          icon: "fas fa-archive",
          text: "RNC, Oficina Virtual, comprobantes fiscales",
        },
        {
          icon: "fas fa-users-cog",
          text: "TSS, Ministerio de Trabajo, RPE",
        },
        {
          icon: "fas fa-stamp",
          text: "Logo Empresa y Sello",
        },
        {
          icon: "fas fa-palette",
          text: "Identidad Corporativa",
        },
      ],
      button: {
        color: "red",
        children: "Cotizar",
        href: cotizar
      },
    },
    {
      title: "Despliegue y Desarrollo Empresarial",
      description: "Plan de Despliegue, Estandarización y Desarrollo",
      price: "",
      list: [
        {
          icon: "fas fa-folder-open",
          text: "Nombre Comercial",
        },
        {
          icon: "fab fa-sketch",
          text: "Registro Mercantil",
        },
        {
          icon: "fas fa-archive",
          text: "RNC, Oficina Virtual, comprobantes fiscales",
        },
        {
          icon: "fas fa-users-cog",
          text: "TSS, Ministerio de Trabajo, RPE",
        },
        {
          icon: "fas fa-stamp",
          text: "Logo Empresa y Sello",
        },
        {
          icon: "fas fa-palette",
          text: "Identidad Corporativa",
        },
        {
          icon: "fas fa-chart-line",
          text: "Estudios de mercado para nuevos productos",
        },
      ],
      button: {
        color: "red",
        children: "Cotizar",
        href: cotizar
      }
    },
  ];
  
  export default cardpricinglist;
  