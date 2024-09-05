"use client";
import { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GalleryWidget = () => {
  const [images, setImages] = useState<string[]>([
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
  ]);

  const onDrop = (acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Create refs for the carousel next and previous buttons
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="bg-[#363C43] p-4 rounded-lg shadow-lg mt-4 mb-10">
      <div className=" flex justify-between items-center mb-10">
        <div className="flex gap-4">
          <Image
            className="hover:scale-105 cursor-pointer"
            src="/icons/questionMark.svg"
            alt="Help icon"
            width={24}
            height={24}
          />
          <h2 className="ml-2 text-lg font-medium bg-[#171717] text-white px-8 py-3 rounded-2xl">
            Gallery
          </h2>
        </div>
        <div className="flex gap-6 w-1/2 items-center justify-end">
          <div {...getRootProps()} className="flex items-center">
            <button className="bg-gray-700 hover:bg-gray-600 py-3 px-6 rounded-full text-sm shadow-custom-shadow text-white">
              + Add Image
            </button>
            <input {...getInputProps()} />
          </div>
          <div className="flex gap-6 mr-2">
            <button
              className="left-btn bg-btn-gradient hover:bg-[#171717] transition-all duration-500 w-10 h-10 rounded-full text-sm shadow-custom flex justify-center items-center text-white"
              onClick={() => prevButtonRef.current?.click()} // Trigger the previous button click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M1.40222 8.37645H15.5967"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="right-btn bg-btn-gradient hover:bg-[#171717] transition-all duration-500 w-10 h-10 rounded-full text-sm shadow-custom flex justify-center items-center text-white"
              onClick={() => nextButtonRef.current?.click()} // Trigger the next button click
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M15.5968 8.37648L1.40236 8.37648"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5968 1.37646L15.5968 8.37646L8.5968 15.3765"
                  stroke="#6F787C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex gap-4">
        <Image
          className="hover:scale-105 cursor-pointer"
          src="/icons/grid.svg"
          alt="Grid icon"
          width={24}
          height={24}
        />
        {images.length > 0 ? (
          <Carousel>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:-rotate-1 "
                >
                  <Image
                    src={image}
                    alt={`Uploaded Image ${index}`}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-lg hover:shadow-custom-box"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Ref attached to Next and Previous buttons */}
            <CarouselPrevious ref={prevButtonRef} className="hidden" />
            <CarouselNext ref={nextButtonRef} className="hidden" />
          </Carousel>
        ) : (
          <div className="text-center text-gray-500">
            No images added yet. Click &quot; Add Image &quot; to upload.
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryWidget;


