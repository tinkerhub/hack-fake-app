interface Props {
    label?: string;
    placeholder?: string;
    value?: string;
    type?: string;
    onChange?: (params: any) => any;
}

function Input({ type, value, label, placeholder, onChange }: Props) {
    return (
        <div className="form-control w-full">
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder || ""}
                value= {value}
                className="input placeholder:text-sm placeholder:text-offtext input-bordered focus:outline-none w-full bg-transparent border-dark"
                onChange = {onChange}
            />
        </div>
    );
}

export default Input;
