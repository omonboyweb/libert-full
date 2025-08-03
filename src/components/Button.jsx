export const Button = ({
  children,
  style,
  type,
  onChange,
  startIcon,
  endIcon,
  classNm,
}) => {
  return (
    <div className={style}>
      {startIcon}
      <button onChange={onChange} type={type} className={classNm}>
        {children}
      </button>
      {endIcon}
    </div>
  );
};
