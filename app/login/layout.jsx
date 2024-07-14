import "./page.css";

export const metadata = {
    title: "Login",
    description: "Login page for Together",
};

export default function LoginLayout({ children }) {
    return (
        <div>{children}</div>
    );
}
