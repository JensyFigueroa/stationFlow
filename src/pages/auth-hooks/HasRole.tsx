import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

interface HasRoleProps {
    role: string;
    children: React.ReactNode;
}

const HasRole: FC<HasRoleProps> = (props) => {
    const userRole = useSelector((state: any) => state.auth.userRole) as string | null;

    return props.role === userRole ? (<>{props.children}</>) : <></>;
};

export default HasRole;