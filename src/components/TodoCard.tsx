export function TodoCard() {
  return (
    <div className="relative w-72 h-32 bg-gray-100 border-2 border-gray-300 flex justify-center items-center rounded-lg shadow-md mb-4">
      <h1 className="absolute top-2 left-2 text-lg font-bold">#ID: 12</h1>
      <p className="text-center">Have a football scrimmage with some friends</p>
      <input type="checkbox" className="absolute bottom-2 left-2 rounded-lg" />
    </div>
  );
}
