import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className=" max-h-screen ">
      <div className="flex flex-col gap-8">
        {" "}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div>
              <Image
                className="h-36 w-48"
                src="/images/mailcheap.png "
                alt=""
                width={1080}
                height={1080}
              />
            </div>
          </div>

          <div className="flex it gap-4 px-5">
            <button className="rounded-full bg-yellow-300 py-3 px-3">
              Start Free Trial
            </button>
            <button className="bg-white py-3 px-3 rounded-full">Login</button>
            <button>
              <Menu />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-5">
          <h2 className="text-3xl font-extrabold">Turn Emails into Revenue</h2>
          <p>
            Win New Customers with the #1 email marketing and automation <br />
            platform * the recommended ways to get more opens, clicks and <br />{" "}
            sales
          </p>
          <button className="bg-yellow-400  py-2 px-3 rounded-full">
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
