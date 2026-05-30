type EmptyStateProps = {
  message: string;
};

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex min-h-36 items-center justify-center px-6 py-10 text-center text-sm leading-6 text-slate-500">
      {message}
    </div>
  );
};

export default EmptyState;
