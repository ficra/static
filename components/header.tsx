import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-2 mx-auto bg-white border-b-2 border-gray-100 sm:py-6 max-w-7xl sm:px-6 md:justify-start md:space-x-10">
      <div className="flex mx-auto">
        <Link href="/" scroll={true}>
          <a className="flex items-center text-blue-600">
            <Image src="/images/icon.svg" height={48} width={48}></Image>
          </a>
        </Link>
      </div>
      <nav className="items-center justify-end flex-1 hidden space-x-10 sm:flex">
        <Link href="/#features" scroll={false}>
          <a className="text-base font-medium text-gray-500 hover:text-gray-900">
            Features
          </a>
        </Link>
        <Link href="/#usage" scroll={false}>
          <a className="text-base font-medium text-gray-500 hover:text-gray-900">
            Usage
          </a>
        </Link>
        <Link href="/#pricing" scroll={false}>
          <a className="text-base font-medium text-gray-500 hover:text-gray-900">
            Pricing
          </a>
        </Link>
        <Link href="/#contact" scroll={false}>
          <a className="text-base font-medium text-gray-500 hover:text-gray-900">
            Contact
          </a>
        </Link>
        <Link href="/get-started" scroll={false}>
          <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-blue-700">
            Get Started
          </a>
        </Link>
      </nav>
    </div>
  );
}
