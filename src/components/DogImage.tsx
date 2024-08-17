import ashDog from "../assets/ashDog.png";
import goldDog from "../assets/goldDog.png";

const DogImage = () => {
  return (
    <section className="w-full h-[426px] flex flex-col md:flex-row">
      <div className="w-full h-[213px] md:h-full">
        <img src={ashDog} alt="Dog" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[213px] md:h-full">
        <img src={goldDog} alt="Dog" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default DogImage;

