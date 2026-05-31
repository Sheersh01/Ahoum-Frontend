import SearchBar from "../components/SearchBar";
import StickyFooter from "../components/StickyFooter";
import CategoryTabs from "../components/CategoryTabs";

const Explores = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full pb-24">
        <header className="pt-5 text-center">
          <h1 className="text-xl leading-6 font-semibold">Find Products</h1>
        </header>

        <div className="mt-5 px-5 md:px-8">
          <SearchBar />
        </div>

        <div className="mt-5 px-4 md:px-8 pb-10">
          <CategoryTabs />
        </div>
      </section>
      <StickyFooter />
    </main>
  );
};

export default Explores;
