export default function Category(props) {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="bg-[#F0EFEF] rounded-full w-[80px] p-4">
        <img src={props.img} alt="Jacket" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

