import { LoginForm } from "../organisms/auth/LoginForm"

export const LoginTemplate = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
            <div className="w-full max-w-md p-6 bg-[#f9f9f9] rounded-lg shadow-lg ">
                <LoginForm />
            </div>
        </div>
    )
}