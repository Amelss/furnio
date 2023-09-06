import Cards from '../components/Cards'


export default function OurProducts() {
  return (
    <div className="font-poppins ">
      <h1 className="text-headingGrey text-[40px] font-bold text-center pb-8">
        Our Products
      </h1>
      <Cards />
      <div className="text-center py-10">
        <button className="text-gold border border-gold px-20 py-3 text-base">Show More</button>
      </div>
    </div>
  );
}
