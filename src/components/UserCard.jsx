import React from "react";
import { Button } from "./Button";

export default function UserCard(props) {
  return (
    <div className="w-[280px] h-[400px] relative">
      <div className="group absolute duration-500 w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
        <div className="absolute duration-500 top-0 left-0 w-full h-full z-[2] bg-[#000] transition-all group-hover:-translate-y-24 group-hover:transition-all group-hover:duration-500">
          <img
            className="object-cover h-full w-auto duration-200 group-hover:opacity-40 group-hover:transition-all"
            src={props.userData.avatar}
            alt="profile one"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] flex">
          <div className="relative block font-bold bottom-10 duration-500 translate-y-40 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-100">
            <Button variant="link">Click for Details</Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 bg-white w-full h-28 z-[1] p-0">
          <h2 className="my-9 mx-0 p-0 text-center text-black text-2xl font-semibold">
            {`${props.userData.first_name} ${props.userData.last_name}`}
            <div className="text-base text-[#333] font-light">UI Developer</div>
          </h2>
        </div>
      </div>
    </div>
  );
}
