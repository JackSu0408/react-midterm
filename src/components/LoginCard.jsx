import { Mail, Lock } from "lucide-react";
import { useSignInWithEmailPassword } from "../react-query";
import { remember, selectIsRemember } from "../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FormInput, FormError, AuthFormLayout } from "./Common";

const LoginCard = ({ redirect }) => {
    const dispatch = useDispatch();
    const { mutate, isLoading, isError, error } = useSignInWithEmailPassword();
    const isRemember = useSelector(selectIsRemember);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onFinish = (e) => {
        e.preventDefault();
        mutate({ ...formData, redirect });
    };

    return (
        <AuthFormLayout onSubmit={onFinish}>
            <FormInput
                label="E-Mail"
                name="email"
                type="email"
                placeholder="e.g., john@example.com"
                icon={Mail}
                value={formData.email}
                onChange={onChange}
            />
            <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="At least 6 characters"
                icon={Lock}
                value={formData.password}
                onChange={onChange}
            />
            <FormInput
                label="Remember me"
                name="remember"
                type="checkbox"
                value={isRemember}
                onChange={e => dispatch(remember(e.target.checked))}
            />
            <div className="flex justify-between">
                <Link to="/" className="link link-hover text-xs hover:text-blue-900 hover:underline">Forgot password?</Link>
            </div>
            <button type="submit" className="btn btn-primary w-full  py-2 rounded border border-blue-900  hover:bg-blue-900 hover:text-white bg-white text-blue-700 transition duration-200" disabled={isLoading}>
                {isLoading ? "Loading..." : "Log in"}
            </button>
            <p className="text-sm mt-2">
                Or <Link to={`/auth/register?redirect=${redirect}`} className="link link-primary text-blue-900 font-medium hover:underline">register now!</Link>
            </p>
            {isError && <FormError error={error} />}
        </AuthFormLayout>
    );
};

export default LoginCard;