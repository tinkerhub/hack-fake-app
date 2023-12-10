import { FeedLayout } from "..";

interface FeedProps {
  children: React.ReactNode;
}

function Feed({ children }: FeedProps) {
  return (
    <FeedLayout>
      {children}
      {/* <ContentForm /> */}
    </FeedLayout>
  );
}

export default Feed;
