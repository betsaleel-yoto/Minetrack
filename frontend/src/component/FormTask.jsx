function FormTask(props) {
  return (
    <>
      <form action="" className="pt-4 pl-5">
        <input
          type="checkbox"
          name="taskFinished"
          id=""
          className="font-semibold font-raleway"
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