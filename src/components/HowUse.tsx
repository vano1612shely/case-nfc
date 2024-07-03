import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { clsx } from "clsx";
export default function HowUse({ className }: { className?: string }) {
  return (
    <div id="howuse" className={clsx(className, "bg-primary")}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 lg:px-40 py-10 md:py-40">
        <div className="flex-1 relative">
          <Image
            src="/howuse2.png"
            width={1000}
            height={1000}
            alt="case image"
            className="relative z-10 w-[80%] lg:w-[600px] m-auto select-none pointer-events-none"
          />
        </div>
        <div className="flex-1">
          <div className="relative">
            <Image
              src="/bg2.png"
              width={2000}
              height={2000}
              alt="bg"
              className="absolute -top-20 z-0 w-[900px] select-none pointer-events-none opacity-50"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-5 text-xl text-center lg:text-right text-white w-full">
            <h1 className="font-semibold  text-4xl lg:text-5xl leading-[50px] mb-10">
              Як використовувати?
            </h1>
            <p>
              Помістіть телефон у чохол із електронним чорнилом для
              автоматичного з’єднання NFC.
            </p>
            <ChevronsDown size={50} className="m-auto" />
            <p>
              Завантажити: відскануйте QR-код на упаковці або знайдіть додаток
              Ink Show в офіційному магазині.
            </p>
            <ChevronsDown size={50} className="m-auto" />
            <p>
              Почніть створювати: реєстрація не потрібна. Натисніть кнопку [GO],
              щоб розпочати саморобне створення, наприклад додати нове
              зображення/текст, довільно відредагувати його та створити назву
              вашої роботи. Завершіть [Cast Screen], щоб оновити свою справу.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
