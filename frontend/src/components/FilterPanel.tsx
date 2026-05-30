type FilterPanelProps = {
  visible: boolean;
  onClose: () => void;
  selectedCategories: string[];
  selectedBrands: string[];
  toggleCategory: (c: string) => void;
  toggleBrand: (b: string) => void;
  onApply: () => void;
};

const FilterPanel = ({
  visible,
  onClose,
  selectedCategories,
  selectedBrands,
  toggleCategory,
  toggleBrand,
  onApply,
}: FilterPanelProps) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex bg-black/40">
      <div className="h-full w-full bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="text-[18px] font-semibold"
          >
            ×
          </button>
          <h2 className="text-[16px] font-semibold">Filters</h2>
          <div style={{ width: 24 }} />
        </div>

        <div className="mt-2 rounded-xl bg-[#f7f7f7] p-4">
          <h3 className="text-[14px] font-semibold">Categories</h3>
          <div className="mt-3 space-y-3">
            {["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"].map(
              (c) => (
                <label key={c} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(c)}
                    onChange={() => toggleCategory(c)}
                    className="h-4 w-4"
                  />
                  <span className="text-[13px]">{c}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[14px] font-semibold">Brand</h3>
          <div className="mt-3 space-y-3">
            {["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"].map(
              (b) => (
                <label key={b} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(b)}
                    onChange={() => toggleBrand(b)}
                    className="h-4 w-4"
                  />
                  <span className="text-[13px]">{b}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            type="button"
            onClick={onApply}
            className="w-full rounded-[10px] bg-[#53b175] py-3 text-white font-semibold"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
