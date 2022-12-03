import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Register.module.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className={styles.RegisterContainer}>
      <form className={styles.FormInputs} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select
          className={styles.selectGender}
          {...register("Title", { required: true })}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Password"
          {...register("Password", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
