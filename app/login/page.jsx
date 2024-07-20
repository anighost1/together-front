"use client"

import { loginDal } from "@/app/login/auth.dal"
import { useMutation } from "@tanstack/react-query"

export default function Login() {

    const loginMutation = useMutation({ mutationFn: loginDal })

    const onSubmit = async (e) => {
        e.preventDefault()
        const usernameOrEmail = e.target.elements.usernameOrEmail.value
        const password = e.target.elements.password.value
        console.log('usernameOrEmail : ', usernameOrEmail)
        console.log('password : ', password)

        const dataToSend = {
            usernameOrEmail,
            password
        }

        try {
            const result = await loginMutation.mutateAsync(dataToSend)
            console.log(result)
            console.log(loginMutation.status)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4 pt-28">
            <h1 className="text-6xl font-semibold text-accent">Login</h1>
            <div className="mockup-window bg-base-300 border lg:w-[40%] md:w-[60%] w-[90%]">
                <div className="bg-base-200 flex justify-center px-4 py-16 overflow-hidden">
                    <form onSubmit={onSubmit} className="flex flex-col justify-center gap-4 w-[95%]">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Username or Email" name="usernameOrEmail" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="password" className="grow" placeholder="Password" name="password" />
                        </label>
                        <button className="btn btn-primary">Login</button>
                        <h4>{loginMutation.status}</h4>
                    </form>
                </div>
            </div>
        </div>
    )
}
