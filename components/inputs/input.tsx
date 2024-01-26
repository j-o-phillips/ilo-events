import { ChangeEvent } from "react";

interface InputProps {
  textarea?: boolean;
  id: string;
  onChange: any;
  type: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  type,
  label,
  textarea,
}) => {
  return (
    <div>
      <label className="block">{label}</label>
      {textarea ? (
        <div
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange((prev: any) => {
              return {
                ...prev,
                [id]: e.target.value,
              };
            })
          }
        >
          <textarea className="w-2/3"></textarea>
        </div>
      ) : (
        <input
          className="w-2/3"
          type={type}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange((prev: any) => {
              return {
                ...prev,
                [id]: e.target.value,
              };
            })
          }
        />
      )}
    </div>
  );
};

export default Input;
