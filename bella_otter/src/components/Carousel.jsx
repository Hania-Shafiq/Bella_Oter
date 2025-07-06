import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2, img3, img4];

export default function Carousel() {
  return (
    <div className="overflow-hidden w-full mt-6">
      <div className="flex animate-scroll gap-6">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            className="h-48 w-auto rounded-xl shadow-lg border border-[#fcd6df]"
          />
        ))}
      </div>
    </div>
  );
}