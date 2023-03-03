import Link from "next/link";

interface LinkComponentProps {
    title: string;
    href: string;
    onClick?: () => void;
}

export default function LinkComponent({ href, title, onClick }: LinkComponentProps) {
    return (
        <Link href={href} onClick={onClick}>
            <p className="text-blue-500">{title}</p>
        </Link>
    )
}