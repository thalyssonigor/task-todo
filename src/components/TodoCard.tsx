export function TodoCard() {
  return (
    <div className="p-4 bg-gray-100 border-2 border-gray-300 flex flex-col justify-center rounded-lg shadow-md mb-4">
      <h1 className=" text-lg font-bold mb-2">#ID: 12</h1>
      <p className="text-left mb-2 ">
        Have a football scrimmage with <br /> some friends
      </p>
      <input
        type="checkbox"
        className=" rounded-lg w-5 h-5 border-2 border-gray-400 checked-"
      />
    </div>
  );
}
