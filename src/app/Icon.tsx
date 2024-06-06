import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div className="text-[24px] w-[100%] h-[100%] bg-black flex justify-center items-center text-white">
        CN
      </div>
    ),
    { ...size },
  );
}
