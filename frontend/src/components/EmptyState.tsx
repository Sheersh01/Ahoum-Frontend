type EmptyStateProps = {
  message: string;
};

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex items-center justify-center border-[#e8e8e8] px-6 text-center text-[14px] text-[#7c7c7c]">
      {message}
    </div>
  );
};

export default EmptyState;
