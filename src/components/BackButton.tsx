import Link from "next/link";

interface BackButtonProps {
  route: string;
  page: string;
}

export const BackButton = ({ route, page }: BackButtonProps) => {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        href={`/${route}`}
        className="inline-block px-3 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-[15px]"
      >
        Back to {page}
      </Link>
    </div>
  )
};