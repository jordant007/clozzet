export default function Featuredlist(props) {
    return (
      <div className="flex flex-col  w-fit">
        <div className="bg-[#F0EFEF]  p-4 w-[250px] h-[300px]">
          <img src={props.img} />
        </div>

        <div className="text-justify mt-[10px]">
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
      </div>
    );
  }