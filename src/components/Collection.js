
const CoffeeCollectionData = {
  data: [
    {
      imageURL: "/assets/data/coffee-bean-bag.png",
      title: "Arabica",
      description:
        "Known as one of the most popular and well known types of coffee bean, Arabica beans are the most commonly produced variety and are considered higher quality beans. In fact, over 60% of the coffee beans in the world that are produced are Arabica variety.",
      altText: "Arabica beans",
    },
    {
      imageURL: "/assets/data/coffee-bean-bag.png",
      title: "Robusta",
      description:
        "As the name hints, the Robusta bean is both hardy and is also immune to a variety of diseases too.",
      altText: "Robusta beans",
    },
    {
      imageURL: "/assets/data/coffee-bean-bag.png",
      title: "Liberica",
      description:
        "One of the hardest types of coffee bean to come by is the Liberica bean. They are larger than the other beans and is the only one in the world that is known to have an irregular shape.",
      altText: "Liberica beans",
    },
    {
      imageURL: "/assets/data/coffee-bean-bag.png",
      title: "Excelsa",
      description:
        "Although having recently been classified as a member of the Liberica family, the Excelsa bean is vastly different in taste when compared to the Liberica coffee bean.",
      altText: "Excelsa beans",
    },
  ],
};

const Collection = ({ imageURL, title, description, altText }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4">
      <img src={imageURL} alt={altText} width="200" height="151" />
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
    </>
  );
};

const CollectionPage = () => {
  return (
    <>
      <section className="relative my-[120px] md:mt-[203px]">
        <h2 className="text-[var(--xl-header-fs)] md:text-[96px] md:absolute md:left-0 md:right-0 md:top-[-70px] md:z-[-1] lg:text-[135px] lg:top-[-100px]">
          Our Collection
        </h2>
        <div className="max-w-[1050px] mx-auto md:grid md:grid-cols-4 gap-4">
          {CoffeeCollectionData.data.map((coffee, key) => (
            <Collection key={key} {...coffee} />
          ))}
        </div>
    </section>
    </>
  );
};


export default CollectionPage;
