import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-base-300 min-h-screen">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-secondary">Buy Now</button>
      <button className="btn btn-primary">Buy Now</button>
      <button className="btn btn-neutral">Buy Now</button>
      <button className="btn btn-accent">Buy Now</button>
      <button className="btn btn-warning">Buy Now</button>
      <button className="btn btn-info">Buy Now</button>
      <button className="btn btn-success">Buy Now</button>
      <button className="btn btn-error">Buy Now</button>
    </div>
  </div>
</div>
</div>
  );
}
