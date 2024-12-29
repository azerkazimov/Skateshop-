import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-3">
      <h1>About page</h1>
      <Link href="/contact">
        <Button>Contacts</Button>
      </Link>
      <Link href="/">
        <button className="px-5 py-2 border border-black rounded-md">
          main page
        </button>
      </Link>
    </main>
  );
}
