import Link from "next/link";


const Hero = () => {

 
  return (
    <section
      className="mt-[90px] rounded-lg p-[100px] px-6 bg-cover bg-center bg-no-repeat max-h-[600px] bg-[url(/assets/home/coffee-cup-home.jpg)]"
    >
      <div className="flex flex-col items-center text-center text-light-cream max-w-[398px] mx-auto md:items-start md:text-left md:ml-[58px] md:max-w-[498px]">
        <h1 className="mb-5 text-xl md:mb-8 text-white">Great simple coffee.</h1>
        <p className="text-lg mb-10 md:max-w-[445px] md:mb-14 text-white">Good communication is just as stimulating as black coffee, and just as hard to sleep after.</p>
      </div>
      <Link href="/about">
              <button className="bg-green-600 p-3 text-white font-bold">Find Out More</button>
      </Link>
    </section>
  );
};

export default Hero