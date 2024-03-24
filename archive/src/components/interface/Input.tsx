interface Props {
    label?: string;
    placeholder?: string;
}

function Input({ label, placeholder }: Props) {
    return (
        <div className="form-control w-full">
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input
                type="text"
                placeholder={placeholder || ""}
                className="input placeholder:text-sm placeholder:text-offtext input-bordered focus:outline-none w-full bg-transparent border-dark"
            />
        </div>
    );
}

export default Input;
