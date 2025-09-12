import { USED_LOGOS } from "../data.jsx";
import { UNUSED_LOGOS } from "../data.jsx";

export default function LogoIcons({ used }) {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 justify-center items-center gap-12 md:grid-cols-none md:flex md:flex-wrap">
          {used
            ? USED_LOGOS.map(({ title, svg }) => (
                <div key={title} className="flex justify-center items-center">
                  <img src={svg} alt={title} className="w-12 h-12" />
                </div>
              ))
            : UNUSED_LOGOS.map(({ title, svg }) => (
                <div key={title} className="flex justify-center items-center">
                  <img src={svg} alt={title} className="w-12 h-12" />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
