function FormTask(props) {
  return (
    <>
      <form action="" method="POST" className="pt-4 pl-5">
        <input
          type="checkbox"
          name="taskFinished"
          id=""
          checked={props.checked}
          className="font-semibold font-raleway"
          onChange={props.change}
        />{" "}
        <label
          htmlFor="checkbox"
          className="text-[#808080]  font-raleway font-semibold"
        >
          {props.text}
        </label>
      </form>
    </>
  );
}

export default FormTask;
