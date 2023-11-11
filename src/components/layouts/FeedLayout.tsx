import { ReactNode } from "react";

import { Navbar } from "..";

interface Props {
    children: ReactNode;
}

function FeedLayout({ children }: Props) {
    return (
        <div>
            <Navbar />

            <>{children}</>
        </div>
    );
}

export default FeedLayout;
