const MyInput = function (props) {
  const { type, content } = props;

  return <input className={`capitalize`} type={type} value={content} />;
};

export default MyInput;
