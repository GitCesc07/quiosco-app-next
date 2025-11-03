import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-2">
      <div className="relative size-40">
        <Image
            fill
            alt="Logotipo Fresh Coffee"
            src="/logo.svg"
         />
      </div>
    </div>
  );
}
