import SectionTitle from "../../../components/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <section className="featured-item bg-fixed pb-24 pt-16 text-white">
      <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />
      <div className="flex justify-center items-center gap-10 max-w-screen-xl mx-auto bg-slate-500 bg-opacity-40">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div>
          <p className="text-2xl">March 20, 2023</p>
          <p className="text-2xl">WHERE CAN I GET SOME?</p>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <button className="btn btn-outline border-orange-400 border-0 border-b-4 hover:bg-black hover:text-white hover:border-black mt-2">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;