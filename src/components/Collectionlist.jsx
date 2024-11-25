export default function Collectionlist({subtitle, title, shop, img, classes}) {
  return (
    <div className={`${classes} p-10 flex justify-between items-end`}>
      <div className="lg:display">
        <p>{subtitle}</p>
        <h4>{title}</h4>
        <p>{shop}</p>
      </div>

      <div className="">
        <img src={img} className="w-[200px] h-[100%] object-cover"/>
      </div>
    </div>
  );
}
