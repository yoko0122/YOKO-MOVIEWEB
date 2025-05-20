import { Clapperboard, Facebook } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-[rgba(67,56,202,1)] text-white md:h-[280px]">
      <div className=" p-[20px] h-[308px] md:h-[200px] md:flex md:justify-between  md:p-[20px] grid gap-5 ">
        <div className="grid gap-1 md:pb-33 md:pl-10">
          <div className="flex gap-2">
            <button>
              <Clapperboard />
            </button>
            <div className="pt-2 text-[20px]">Movie Z</div>
          </div>
          <div>© 2024 Movie Z. All Rights Reserved.</div>
        </div>
        <div className="flex justify-between md:gap-20  md:pr-10">
          <div className="grid ">
            <div className=" text-[20px]">Constact information</div>
            <div className="flex gap-2">
              <div className="pt-3">
                <Mail />
              </div>
              <div>
                <p>Email:</p>
                <p>dolbadrahchuka@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="pt-3">
                <Phone />
              </div>
              <div>
                <p>Phone: </p>
                <p>94438118</p>
              </div>
            </div>
          </div>
          <div className="grid gap-2  md:h-2">
            <div className=" text-[20px]">follow us</div>
            <div className="grid gap-2 md:flex md:gap-3">
              <div>facebook</div>
              <div>instagram</div>
              <div>twitter</div>
              <div>Youtube</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
