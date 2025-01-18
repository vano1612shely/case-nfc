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
        <CarouselBlock className="lg:hidden" />
        <p className="mb-5 text-md lg:text-xl lg:max-w-[70%]">
          Stellen Sie sich Ihre Handyhülle als Leinwand vor, die sich dynamisch je nach Ihrem Stil oder Ihrer Stimmung verändert. Wie cool ist das? Die E Ink Case-Hülle verwandelt diese coole Fantasie in Realität, indem sie die Einstellungen Ihres Smartphones anpasst.
        </p>
        <p className="mb-5 text-md lg:text-xl lg:max-w-[70%]">

          Passen Sie Ihre Hülle an, um alles zu zeigen, was Sie möchten – sei es Ihr Lieblingspromi, Ihre tägliche To-Do-Liste, Ihr Motto, das Logo Ihres Unternehmens oder sogar ein Bild Ihres Lieblingstiers. Die Möglichkeiten sind grenzenlos, und jedes Design, das Sie wählen, macht Ihre Handyhülle zu einem einzigartigen Gesprächsstarter.
        </p>
        <RequestDialog defaultValues={{}}>
          <button className="p-3 px-6 bg-orange-400 rounded-xl hover:bg-orange-600 duration-200 font-semibold">
            Jetzt kaufen
          </button>
        </RequestDialog>
      </div>
      <CarouselBlock className="hidden lg:flex" />
    </div>
  );
}
