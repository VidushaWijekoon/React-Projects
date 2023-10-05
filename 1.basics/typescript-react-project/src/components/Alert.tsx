import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="mt-4">
        <div className="alert alert-danger alert-dismissible" role="alert">
          {children}
          <button type="button" className="btn-close" onClick={onClose}>
            close
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;
