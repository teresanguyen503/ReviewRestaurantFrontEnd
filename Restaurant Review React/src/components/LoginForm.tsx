import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email required." })
    .email("This is not a valid email."),
  password: z.string().min(1, { message: "Password is required." }),
});

export type LoginFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: LoginFormData) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="email-login" className="form-label">
          Email
        </label>
        <input
          id="email-login"
          type="email"
          className="form-control"
          {...register("email")}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="password-login" className="form-label">
          Password
        </label>
        <input
          id="password-login"
          type="text"
          className="form-control"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
