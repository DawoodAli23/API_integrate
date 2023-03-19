import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className=" flex w-44 flex-col justify-center bg-gray-100"
    >
      <input {...register("firstName")} className="block outline" />
      <input
        {...register("lastName", { required: true })}
        className="block outline"
      />
      {errors.lastName && <p>Last name is required.</p>}
      <input
        {...register("age", { pattern: /\d+/ })}
        className="block outline"
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
