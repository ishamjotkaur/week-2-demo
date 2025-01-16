import Link from "next/link";
import Title from "./title";
export default function Page() {
    return (
      <div>
        <Title />
        <Title />
        <Title />
        <Title />
        <h1> Welcome to Week-2! </h1>
        <p> <Link href="/">Go to Home </Link></p>
      </div>
    );
  }