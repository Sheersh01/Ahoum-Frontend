const SkeletonProductCard = () => (
  <article className="flex min-h-[14rem] w-full animate-pulse flex-col rounded-xl border border-slate-100 bg-white p-3">
    <div className="flex flex-1 flex-col">
      <div className="flex min-h-20 items-center justify-center sm:min-h-24">
        <div className="h-20 w-20 rounded-lg bg-slate-200 sm:h-24 sm:w-24" />
      </div>

      <div className="mt-3 h-4 w-3/4 rounded bg-slate-200" />
      <div className="mt-1 h-3 w-1/2 rounded bg-slate-200" />

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
        <div className="h-5 w-16 rounded bg-slate-200" />
        <div className="h-10 w-10 rounded-xl bg-slate-200" />
      </div>
    </div>
  </article>
);

export default SkeletonProductCard;
