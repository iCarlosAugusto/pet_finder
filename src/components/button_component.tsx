interface ButtonComponentProps {
    onClick: () => void;
    title: string;
}

export default function ButtonComponent({ onClick, title }: ButtonComponentProps) {
    return (
        <button className="p-3 bg-slate-500 rounded mt-3" onClick={onClick}>
            <p className="text-white">{title}</p>
        </button>
    )
}