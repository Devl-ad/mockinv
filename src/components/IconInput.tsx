interface props {
  label: boolean;
  type: string;
  placeholder: string;
  required: boolean;
  name: string;
  icon: string;
  children: JSX.Element | null;
  className: string;
  error?: string | undefined;
  touched?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<unknown, Element>) => void;
  value: string | number;
}
const IconInput = ({
  label,
  type,
  name,
  placeholder,
  required,
  icon,
  className,
  children,
  handleBlur,
  handleChange,
  error,
  value,
  touched,
}: props) => {
  return (
    <>
      <div className="form-group ">
        {label ? <label htmlFor="">{label}</label> : ""}

        <div className="input-group ">
          <div className="input-group-addon">
            <span className="input-group-text" id="basic-addon1">
              <i className={`fa ${icon} ${className}`}></i>
            </span>
          </div>
          <input
            type={type}
            name={name}
            className={`form-control textinput textInput form-control  
              ${error && touched ? "is-invalid" : null}
              `}
            placeholder={placeholder}
            required={required}
            id={`id_${name}`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {children ? (
            <>
              <div className="input-group-addon">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-eye-slash password-toggle"></i>
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        {error && touched ? <p className="invalid-feedback">{error}</p> : null}
      </div>
    </>
  );
};

export default IconInput;
