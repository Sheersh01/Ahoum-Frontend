import SearchIcon from "../assets/Search.png";

type SearchBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search Store",
}: SearchBarProps) => {
  return (
    <div className="flex h-10 w-full items-center gap-3 rounded-xl bg-[#f2f3f2] px-3 sm:h-11 sm:px-4">
      <label htmlFor="store-search" className="sr-only">
        Search store
      </label>
      <img src={SearchIcon} alt="" className="h-4 w-4 shrink-0" />
      <input
        id="store-search"
        type="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-medium leading-5 text-[#181725] outline-none placeholder:text-[#7c7c7c]"
      />
    </div>
  );
};

export default SearchBar;
