import range1 from '../assets/range1.png';
import range2 from '../assets/range2.png';
import range4 from '../assets/range4.png';

export default function BrowseRange() {
    return (
        <section className="text-center mb-[100px]">
            <h2 className="text-[32px] text-[#] font-bold leading-normal">Browse The Range</h2>
            <p className="text-[20px] text-[#666] font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="range-flex flex flex-col md:flex-row justify-center gap-[30px] mt-[50px]">
            <figure className="flex flex-col gap-[20px]">
            <img className="w-[100%]" src={range1} alt="" />
            <figcaption className="text-[24px] font-semibold leading-normal">Dining</figcaption>
            </figure>
            <figure className="flex flex-col gap-[20px]">
            <img src={range2} alt="" />
            <figcaption className="text-[24px] font-semibold leading-normal">Living</figcaption>
            </figure>
            <figure className="flex flex-col gap-[20px]">
            <img src={range4} alt="" />
            <figcaption className="text-[24px] font-semibold leading-normal">Bedroom</figcaption>
            </figure>
        </div>
        </section>
    );
}
