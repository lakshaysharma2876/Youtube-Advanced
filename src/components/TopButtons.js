

const btnList = ["All", "Gaming", "Music", "Action Thrillers", "Science Fiction", "Valorant", "Salman Khan"];

const TopButtons = () => {
  return (
    <div className="flex flex-wrap h-10 font-semibold gap-3">
      {btnList.map((btn, index) => (
        <button key={index} className="bg-gray-300 rounded-lg p-2 m-2 cursor-pointer">
          {btn}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;