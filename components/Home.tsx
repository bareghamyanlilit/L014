"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  calendar,
  date,
  envelop,
  firstname,
  name,
  txt1,
  txt1_1,
  txt2,
  txt3,
  vazox1,
  vazox2,
} from "@/data/data";
import { motion } from "framer-motion";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";
import { TimeBox } from "./TimeBox";
import AttendanceGuests from "./RSVP";
import { Program } from "./Program";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   if (openEnvelope) {
  //     setIsPlaying(true);
  //   } else {
  //     setIsPlaying(false);
  //   }
  // }, [openEnvelope]);

  return (
    <div className={`${openEnvelope ? "" : "relative h-dvh"}  text-center overflow-hidden  FontArTarumianBarakU `}>
      <div className={` ${openEnvelope ? "animate-bounceYT" : ""} rounded-4xl absolute z-55 triangleT -top-[45%] left-1/2 -translate-x-1/2 bgC w-[85dvh] h-[85dvh] border border-guyn`}></div>
      <div className={` ${openEnvelope ? "animate-bounceYB" : ""} rounded-4xl absolute z-53 triangleB -bottom-1/2 left-1/2 -translate-x-1/2 bgC w-dvh h-dvh border border-guyn`}></div>
      <div className={` ${openEnvelope ? "animate-bounceXL" : ""} rounded-4xl absolute z-50 triangleL right-[80%] bgC w-dvh h-dvh border border-guyn`}></div>
      <div className={` ${openEnvelope ? "animate-bounceXR" : ""} rounded-4xl absolute z-50 triangleR left-[80%] bgC w-dvh h-dvh border border-guyn`}></div>
      
      <p className={` ${openEnvelope ? "opacity-0" : ""} z-60 absolute text-3xl top-20 text-vrayi font-bold left-1/2 -translate-x-1/2 `}>Հարսանեկան հրավիրատոմս</p>
      <p className={` ${openEnvelope ? "opacity-0" : ""} z-60 absolute text-2xl bottom-20 text-vrayi font-bold left-1/2 -translate-x-1/2 `}>Սիրով <br />{firstname}</p>
      
      <img
        src={envelop[1]}
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      />

      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#4a4a4a81]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="m-auto max-w-md ">
        {/* arajin mas */}
        <div className="font-bold w-full overflow-hidden relative">
          <Image
            src="/img1.jpg"
            alt="icon1"
            width={500}
            height={500}
            className=" h-[80vh] object-cover "
          />
          <div className=" absolute text-white text-[28px] max-[370px]:text-2xl bottom-15 left-5 max-[370px]:left-10 flex items-center justify-center tracking-[0.25em]">
            {/* FIRST NAME */}
            <motion.h2 className="relative mb-20 text-white -mr-10 " {...anim}>
              {name[0]}
            </motion.h2>

            {/* AND */}
            <motion.span {...anim} className=" relative text-white ">
              և
            </motion.span>

            {/* SECOND NAME */}
            <motion.h2 className="relative mt-20 text-white -ml-10 " {...anim}>
              {name[1]}
            </motion.h2>
          </div>
        </div>

        {/* 2rd mas teqster */}
        <div className=" px-5 mb-20 tracking-[10%]  ">
          <motion.h2 {...anim} className=" text-vrayi text-[64px] my-20">
            {date}
          </motion.h2>
          <div className=" tracking-[15%] leading-10">
            <motion.h3
              {...anim}
              className=" font-bold text-sovorakan text-[40px]"
            >
              Սիրելիներս
            </motion.h3>
            <motion.p
              {...anim}
              className=" text-sovorakan  text-3xl mt-10 "
            >
              {txt1}
            </motion.p>
          </div>
        </div>

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full font-bold  text-3xl text-vrayi ">
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazox1}
          </div>
          <div className=" FontBraindDoctor whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazox1}
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazox1}
          </div>
          <div className="relative my-15">
            <motion.div {...anim}>
              <Image
              src="/img2.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-full h-100 object-cover "
              />
              </motion.div>

            <motion.p {...anim} className=" font-normal mt-15 text-3xl tracking-[25%] text-center ">
              {txt3}
            </motion.p>
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazox1}
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazox1}
          </div>
          <div className="FontBraindDoctor whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazox1}
          </div>
        </div>

        <Calendar year={2026} month={8} highlightDay={8} />

        <Program />

        {/* hethashxvark */}
        <TimeBox />

        <div className="grid grid-cols-2 text-4xl font-bold gap-10 my-20 text-vrayi ">
          <div className="flex flex-col gap-15">
            <motion.h3 {...anim} className="">MY</motion.h3>

            <motion.div {...anim} className="">
              <Image
                src="/img5.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>

            <motion.div {...anim} className="">
              <Image
                src="/img7.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-15">

            <motion.div {...anim} className="">
              <Image
                src="/img6.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>

            <motion.div {...anim} className="">
              <Image
                src="/img8.jpg"
                width={500}
                height={500}
                alt="img"
                className="w-full object-cover "
              />
            </motion.div>
            <motion.h3 {...anim} className="">LOVE</motion.h3>
          </div>
        </div>

        {/* dress code */}
        <div className=" text-vrayi">
          <motion.h3
            {...anim}
            className=" font-bold  text-[40px] my-10 "
          >
            Dress Code
          </motion.h3>

          <motion.p
            {...anim}
            className=" text-3xl tracking-widest mb-20"
          >
            {txt2}
          </motion.p>

        </div>


        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full  text-3xl text-vrayi ">
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2 -rotate-1  -translate-x-full">
            {vazox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee my-10  -translate-x-full">
            {vazox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2  rotate-1 -translate-x-full">
            {vazox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee my-10  -translate-x-full">
            {vazox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2  rotate-1 -translate-x-full">
            {vazox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee my-10  -translate-x-full">
            {vazox2}
          </div>
          <div className="FontBabylonicaRegular whitespace-nowrap animate-marquee-2  rotate-1 -translate-x-full">
            {vazox2}
          </div>
          <motion.div {...anim} className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/img4.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-[70vw] min-[700px]:w-[30vw] min-[700px]:h-[30vw] mx-auto h-[70vw] object-cover relative z-10"
            />
          </motion.div>
        </div>

        <AttendanceGuests />
      </div>
      <Footer />
    </div>
  );
}
