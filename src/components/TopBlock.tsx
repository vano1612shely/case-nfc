import CarouselBlock from "@/components/Carousel";
import { clsx } from "clsx";
import RequestDialog from "@/components/RequestDialog";
export default function TopBlock({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row gap-10 items-center flex-wrap px-5 md:px-40 md:py-20",
        className,
      )}
    >
      <div className="w-0.5 bg-slate-200 h-[300px] rounded-xl mr-6 hidden md:block"></div>
      <div className="flex-1 relative z-10 text-center md:text-left">
        <h1 className="font-semibold text-5xl leading-[50px] mb-10">
          Fashion Case <br />
          <span className="text-3xl">Born to love</span>
        </h1>
        <p className="mb-5 text-xl lg:max-w-[70%]">
          Уявіть свій чохол для телефону як полотно, яке динамічно змінюється
          відповідно до вашого стилю чи настрою. Як це круто? Футляр E Ink Case
          перетворює цю класну фантазію в реальність, змінюючи налаштування
          смартфона.
        </p>
        <p className="mb-5 text-xl lg:max-w-[70%]">
          Налаштуйте свій футляр будь-чим, що ви хочете продемонструвати - будь
          то ваша улюблена знаменитість, ваш щоденний список справ, ваш девіз,
          логотип вашої компанії або навіть зображення вашої улюбленої тварини.
          Можливості безмежні, і кожен обраний вами дизайн робить ваш чохол для
          телефону унікальним початком розмови.
        </p>
        <RequestDialog defaultValues={{}}>
          <button className="p-3 px-6 bg-orange-400 rounded-xl hover:bg-orange-600 duration-200 font-semibold">
            Купити зараз
          </button>
        </RequestDialog>
      </div>
      <CarouselBlock />
    </div>
  );
}
