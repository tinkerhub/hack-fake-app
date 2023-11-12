import { ReactNode } from "react";

import { Navbar, ScrollButtons } from "..";

interface Props {
    children: ReactNode;
}

function FeedLayout({ children }: Props) {
    return (
        <div>
            <Navbar />
            <>{children}</>
            <ScrollButtons />
        </div>
    );
}

export default FeedLayout;
