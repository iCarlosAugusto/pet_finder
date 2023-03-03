interface InputComponentProps {
    label?: string;
    placeholder?: string;
}

export default function InputComponent({ label, placeholder, ...rest }: InputComponentProps) {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input 
                {...rest}
                type="text" 
                className="border-solid  border-2 border-gray-400 rounded p-2"
                placeholder={placeholder}
                
             />
        </div>
    )
}