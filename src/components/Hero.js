

const Hero = () => {

 
  return (
    <section
      className="flex flex-col items-center justify-center text-center mt-[90px] text-[var(--light-cream-100)] bg-cover h-[400px] rounded-[12px] bg-[url(/assets/home/coffee-cup-home.jpg)] md:items-start md:text-left md:p-[58px] md:h-[450px]"
    >
      <div className="translate-y-[-10%] m-6 max-w-[398px] md:max-w-none md:mb-8 md:mt-6">
        <h1 className="mb-5 md:mb-8 text-white">Great simple coffee.</h1>
        <p className="text-justify max-w-[398px] md:max-w-[445px] text-white">Good communication is just as stimulating as black coffee, and just as hard to sleep after.</p>
      </div>
    </section>
  );
};

export default Hero