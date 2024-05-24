import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { SavePost } from "../../components/save-post";

function SavePostPage() {
  const location = useLocation();
  const { current: defaultPost } = useRef(location.state?.post);

  return (
    <main>
      <SavePost defaultPost={defaultPost} />
    </main>
  );
}

export { SavePostPage };
