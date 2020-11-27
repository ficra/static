import Link from "next/link";

export default function Nav() {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-6 mx-auto bg-white border-b-2 border-gray-100 max-w-7xl sm:px-6 md:justify-start md:space-x-10">
      <div className="flex justify-end">
        <Link href="/" scroll={true}>
          <a className="flex items-center space-x-4">
            <span className="sr-only">Workflow</span>
            <img
              className="inline h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              alt=""
            />
            {/* <span className="text-2xl font-semibold tracking-wide text-blue-600 uppercase">
              Ficra
            </span> */}
          </a>
        </Link>
      </div>
      <nav className="flex items-center justify-end flex-1 space-x-10">
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
        <Link href="/getstarted" scroll={false}>
          <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-blue-700">
            Get Started
          </a>
        </Link>
      </nav>
    </div>
  );
}
