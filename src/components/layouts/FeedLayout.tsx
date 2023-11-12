import { ReactNode } from "react";

import { Navbar, ScrollButtons } from "..";

interface Props {
    children: ReactNode;
}

function FeedLayout({ children }: Props) {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <>{children}</>
            <ScrollButtons />
        </div>
    );
}

export default FeedLayout;
