interface props {
  label: boolean;
  type: string;
  placeholder: string;
  required: boolean;
  name: string;
  icon: string;
  children: JSX.Element | null;
  className: string;
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
            className="form-control textinput textInput form-control"
            placeholder={placeholder}
            required={required}
            id={`id_${name}`}
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
        <p className="invalid-feedback">{}</p>
      </div>
    </>
  );
};

export default IconInput;
