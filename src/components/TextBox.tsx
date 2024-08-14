export const TextBox = ({ text }: { text: string }) => {
  return (
    <div className="bg-gray-200 rounded-lg py-2 px-4">
      <h2 className="font-normal text-lg">{text}</h2>
    </div>
  );
};

export const TextBoxSmall = ({ text }: { text: string }) => {
  return (
    <div className="bg-gray-200 rounded-lg py-1 px-2">
      <h2 className="font-normal text-base">{text}</h2>
    </div>
  );
};
