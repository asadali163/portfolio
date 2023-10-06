const DetailCard = (data) => {
  const { name, detail, icon } = data;
  return (
    <div className="flex gap-4">
      <div className="h-14 w-14 bg-mn-primary rounded-lg flex items-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 capitalize">
          {name}
        </h3>
        <p className="text-gray-600 text-md">{detail}</p>
      </div>
    </div>
  );
};
export default DetailCard;
