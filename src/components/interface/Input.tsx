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
                className="input input-bordered focus:outline-none w-full"
            />
        </div>
    );
}

export default Input;
