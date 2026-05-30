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
    <div className="fixed inset-0 z-50 flex items-end bg-black/40 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="filters-title"
        className="h-full w-full bg-white p-6 sm:max-w-md sm:mx-auto sm:rounded-lg sm:p-8"
      >
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="text-lg font-semibold"
            autoFocus
          >
            ×
          </button>
          <h2 className="text-base font-semibold">Filters</h2>
          <div style={{ width: 24 }} />
        </div>

        <div className="mt-2 rounded-xl bg-[#f7f7f7] p-4">
          <h3 className="text-sm font-semibold">Categories</h3>
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
                  <span className="text-sm">{c}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold">Brand</h3>
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
                  <span className="text-sm">{b}</span>
                </label>
              ),
            )}
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <button
            type="button"
            onClick={onApply}
            className="w-full rounded-lg bg-[#53B175] py-3 text-white font-semibold"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
