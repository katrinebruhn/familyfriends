const BreedTag = ({ label, color }) => {
  return (
    <span
      className={`inline-block rounded-full px-4 py-2 text-sm text-tag-text ${color}`}
    >
      {label}
    </span>
  );
};

export default BreedTag;
