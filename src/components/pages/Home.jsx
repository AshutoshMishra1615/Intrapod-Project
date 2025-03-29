import { WobbleCard } from "@/components/ui/WobbleCard.jsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-50 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-100 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-800">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-base/6 text-slate-600">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-slate-50">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-800">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-slate-600">
          If someone yells "stop!", goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-slate-100 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="max-w-sm md:max-w-lg text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-800">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] mx-auto text-center text-base/6 text-slate-600">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
          <div className="mt-8 flex justify-center gap-6 overflow-visible">
            <Button
              asChild
              className="transition-all duration-300 transform hover:-translate-y-1 bg-[#1a91f0] hover:bg-[#1a91f0]/90 py-6 px-8"
            >
              <Link to="/build">Build</Link>
            </Button>
            <Button
              asChild
              className="transition-all duration-300 transform hover:-translate-y-1 bg-[#1a91f0] hover:bg-[#1a91f0]/90 py-6 px-8"
            >
              <Link to="/templates">Template</Link>
            </Button>
          </div>
        </div>
        {/* Right side image */}
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl grayscale filter"
        />
        {/* Left side image */}
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -left-10 md:-left-[40%] lg:-left-[20%] -bottom-10 object-contain rounded-2xl grayscale filter"
        />
      </WobbleCard>
    </div>
  );
}
