import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface AuthenticatedProps {
    children: React.ReactNode;
}

const Authenticated: React.FC<AuthenticatedProps> = (props) => {
    const navigate = useNavigate();
    const auth = useSelector((state: any) => state.auth);

    useEffect(() => {
        if (!auth.isAuthenticated) {
            console.log("User not authenticated, redirecting to login.");
            navigate("/login");
        }
    }, []);

    return (<>{props.children}</>);
}

export default Authenticated;