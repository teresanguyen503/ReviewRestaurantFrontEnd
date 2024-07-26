import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import securityQuestions from "../securityQuestions";

const schema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    email: z
      .string()
      .min(1, { message: "Email required." })
      .email("This is not a valid email."),
    password: z
      .string()
      .min(8, { message: "Password required with a minimum of 8 characters." }),
    confirmPassword: z.string(),
    securityQuestion: z.enum(securityQuestions, {
      errorMap: () => ({ message: "Security question is required." }),
    }),
    securityAnswer: z.string().min(1, {
      message: "Please provide an answer to your security question.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: RegisterFormData) => void;
}

const RegistrationForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          className="form-control"
          {...register("firstName")}
        />
        {errors.firstName && (
          <p className="text-danger">{errors.firstName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          className="form-control"
          {...register("lastName")}
        />
        {errors.lastName && (
          <p className="text-danger">{errors.lastName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          {...register("email")}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-control"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="form-control"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="securityQuestion" className="form-label">
          Security Question
        </label>
        <select
          {...register("securityQuestion")}
          id="securityQuestion"
          className="form-select"
        >
          <option value="0"></option>
          {securityQuestions.map((securityQuestion) => (
            <option key={securityQuestion} value={securityQuestion}>
              {securityQuestion}
            </option>
          ))}
        </select>
        {errors.securityQuestion && (
          <p className="text-danger">{errors.securityQuestion.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="securityAnswer" className="form-label">
          Security Answer
        </label>
        <input
          id="securityAnswer"
          type="text"
          className="form-control"
          {...register("securityAnswer")}
        />
        {errors.securityAnswer && (
          <p className="text-danger">{errors.securityAnswer.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
