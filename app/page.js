import Link from "next/link";
export default function Home() {
  let a = 5;
  let b = 10;
  return (
    <div>
      <h1> My App Week-2 </h1>
      <p> <Link href="/week_2"> Go to Week2 </Link> </p>
      <p>The addition is: {a + b} </p>
    </div>
  );
}
