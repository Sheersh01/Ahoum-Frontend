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
    <label className="flex h-[41px] w-full items-center gap-[12px] rounded-[11px] bg-[#f2f3f2] px-[12px]">
      <img src={SearchIcon} alt="" className="h-[15px] w-[15px] shrink-0" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[12px] leading-none font-medium text-[#181725] outline-none placeholder:text-[#7c7c7c]"
      />
    </label>
  );
};

export default SearchBar;
