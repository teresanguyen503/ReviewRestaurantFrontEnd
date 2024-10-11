import React from "react";

interface Props {
  buttonText: string;
  className: string;
  label: string;
  formComponent: React.ComponentType<any>;
  formProps?: any;
}

const ModalButton = ({
  buttonText,
  className,
  label,
  formComponent: FormComponent,
  formProps,
}: Props) => {
  return (
    <>
      <button
        type="button"
        className={className}
        data-bs-toggle="modal"
        data-bs-target={`#${label}Modal`}
      >
        {buttonText}
      </button>

      <div
        className="modal fade"
        id={`${label}Modal`}
        aria-labelledby={`#${label}ModalLabel`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-5">
                <FormComponent {...formProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalButton;
