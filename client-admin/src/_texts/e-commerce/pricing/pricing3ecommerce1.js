import cardproductplain from "_texts/e-commerce/cards/cardproductplain.js";

const textProps = {
  heading2badge: {
    badge: { color: "light", children: "Have you seen us?" },
    title: "Paquetes SIDE",
    description:
      ".",
    alignment: "left",
  },
  button: {
    color: "pink",
    children: "Load more...",
  },
  cards: [
    { ...cardproductplain },
    {
      image: require("assets/img/pages/tshirt2.jpg").default,
      title: "Casablanca",
      type: "borderless",
      badge: {
        color: "red",
        children: "On Discount",
      },
      price: {
        old: "$1.179",
        new: "$999",
      },
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/pages/tshirt3.jpg").default,
      title: "Palm Angels",
      type: "borderless",
      price: "$450",
      link: {
        href: "#pablo",
      },
    },
    {
      image: require("assets/img/pages/tshirt4.jpg").default,
      title: "Saint Laurent",
      type: "borderless",
      price: "$349",
      link: {
        href: "#pablo",
      },
    },
  ],
};
export default textProps;
